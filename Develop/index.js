// Packages
const fs       = require('fs').promises;
const inquirer = require('inquirer');

// Licenses
const licenses  = {
	apache2: {
		badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
		link:  'https://opensource.org/licenses/Apache-2.0',
		name:  'Apache License 2.0 (Apache-2.0)',
		short: 'Apache-2.0'
	},
	bsd2:    {
		badge: 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
		link:  'https://opensource.org/licenses/BSD-2-Clause',
		name:  'BSD 2-Clause license',
		short: 'BSD-2-Clause'
	},
	bsd3:    {
		badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
		link:  'https://opensource.org/licenses/BSD-3-Clause',
		name:  'BSD 3-Clause license',
		short: 'BSD-3-Clause'
	},
	cc4:     {
		badge: 'https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg',
		link:  'https://creativecommons.org/licenses/by/4.0/',
		name:  'Creative Commons Attribution 4.0 International',
		short: 'CC BY 4.0'
	},
	gpl3:    {
		badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
		link:  'https://opensource.org/licenses/GPL-3.0',
		name:  'GNU General Public License',
		short: 'GPL-3.0'
	},
	lgpl3:   {
		badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
		link:  'https://opensource.org/licenses/LGPL-3.0',
		name:  'GNU Lesser General Public License',
		short: 'LGPL-3.0'
	},
	mit:     {
		badge: 'https://img.shields.io/badge/License-MIT-blue.svg',
		link:  'https://opensource.org/licenses/Apache-2.0',
		name:  'MIT License (MIT)',
		short: 'MIT'
	}
};
// Prompts
const prompts   = {
	contribution: {
		type:    'input',
		name:    'contribution',
		message: 'Contribution guidelines\n'
	},
	credit:       {
		type:    'input',
		name:    'contribution',
		message: 'Contribution guidelines\n'
	},
	description:  {
		type:    'editor',
		name:    'description',
		message: 'Project description\n'
	},
	email:        {
		type:    'input',
		name:    'email',
		message: 'Email address\n'
	},
	installation: {
		type:    'editor',
		name:    'installation',
		message: 'Installation instructions\n'
	},
	licenses:     {
		type:    'list',
		name:    'license',
		message: 'Choose a license for your project:',
		choices: Object.values(licenses).map(license => ({
			name:  license.name,
			value: license
		}))
	},
	tests:        {
		type:    'editor',
		name:    'tests',
		message: 'Test instructions\n'
	},
	title:        {
		type:    'input',
		name:    'title',
		message: 'What\'s the name of your project?\n'
	},
	usage:        {
		type:    'editor',
		name:    'usage',
		message: 'Usage information\n'
	},
	userName:     {
		type:    'input',
		name:    'userName',
		message: 'GitHub username\n'
	}
};
// Questions
const questions = [];

function checkCommandLine() {
	// Check if the user wants to keep it simple.
	if (process.argv.length > 2 && process.argv[2] === '--simple')
		// Iterate through all the 'editor' prompts and change them to the simpler 'input'
		for (let [key, prompt] of Object.entries(prompts)) {
			if (prompt.type === 'editor') prompts[key].type = 'input';
		}
}

function formatContent(content) {
	const sections  = ['Description', 'Installation', 'Usage', 'Contribution', 'Tests', 'Questions', 'License'];
	const toc       = '## Table of Contents\n\n' +
	                  sections.map(section => `- [${section}](#${section.toLowerCase()})`).join('\n');
	let textContent = '';

	// Add license badge and title
	textContent = `[![License: ${content.license.short}](${content.license.badge})](${content.license.link})\n\n`;
	textContent += `# ${content.title}\n\n`;

	// Loop through the sections
	sections.forEach(section => {
		// Set the section title
		let sectionText = `## ${section}\n\n`;

		switch (section) {
			case 'License':
				// Format the output.
				sectionText += `This project is licensed under the ${content.license.name} - see the [${content.license.short} license](${content.license.link}) page for details.\n\n`;
				break;

			case 'Questions':
				// Format the output.
				sectionText += `For any questions, please feel free to reach out.\n\n` +
				               `- GitHub: [https://github.com/${content.contact.userName}](https://github.com/${content.contact.userName})\n` +
				               `- Email: [${content.contact.email}](${content.contact.email})\n\n` +
				               `Please ensure to mention the project in the subject line for the email to get a prompt response.`;
				break;

			default:
				// Append the section data.
				sectionText += content.sections[section.toLowerCase()];
		}
		// Add 2 new lines.
		textContent += `${sectionText}\n\n`;

		// Add the Table of Contents after the description.
		if (section === 'Description') textContent += `${toc}\n\n`;
	});

	return textContent;
}

// Prompting the user for questions
async function promptUser(promptList) {
	// Clear old questions and add new ones.
	questions.length = 0;
	questions.push(...promptList.map(prompt => prompts[prompt]));

	// Return results
	return await inquirer.prompt(questions);
}

// Initialization function
async function init() {
	checkCommandLine();

	// Prompt the user with questions.
	const title    = await promptUser(['title']);
	const sections = await promptUser(['description', 'installation', 'usage', 'contribution', 'tests']);
	const license  = await promptUser(['licenses']);
	const contact  = await promptUser(['userName', 'email']);

	// Format the content
	const content = formatContent({...title, sections, ...license, contact});

	// Write the data to the readme file
	writeToFile('README.md', content);
}

// Write to file
async function writeToFile(fileName, data) {
	await fs.writeFile(fileName, data)
	        .then(data => console.log('File created successfully!'))
	        .catch(error => console.error(error));
}

// Function call to initialize app
init();
