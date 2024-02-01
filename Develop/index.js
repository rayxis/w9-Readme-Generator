// Packages
const fs       = require('fs').promises;
const inquirer = require('inquirer');

let content    = {};
const fileName = 'README.md';
// Licenses
const licenses = {
	apache2: {
		link:  'https://opensource.org/licenses/Apache-2.0',
		name:  'Apache License 2.0 (Apache-2.0)',
		short: 'Apache-2.0'
	},
	bsd2:    {
		link:  'https://opensource.org/licenses/BSD-2-Clause',
		name:  'BSD 2-Clause license',
		short: 'BSD-2-Clause'
	},
	bsd3:    {
		link:  'https://opensource.org/licenses/BSD-3-Clause',
		name:  'BSD 3-Clause license',
		short: 'BSD-3-Clause'
	},
	cc4:     {
		link:  'http://creativecommons.org/licenses/by/4.0/',
		name:  'Creative Commons Attribution 4.0 International',
		short: 'CC BY 4.0'
	},
	gpl3:    {
		link:  'https://opensource.org/licenses/GPL-3.0',
		name:  'GNU General Public License',
		short: 'GPL-3.0'
	},
	lgpl3:   {
		link:  'https://opensource.org/licenses/LGPL-3.0',
		name:  'GNU Lesser General Public License',
		short: 'LGPL-3.0'
	},
	mit:     {
		desc: 'MIT License (MIT)',
		link: 'https://opensource.org/licenses/Apache-2.0',
		name: 'MIT License'
	}
};
const prompts  = {
	contribution: {
		type:    'input',
		name:    'contribution',
		message: 'Contribution guidelines'
	},
	description:  {
		type:    'input',
		name:    'description',
		message: 'Project description'
	},
	email:        {
		type:    'input',
		name:    'email',
		message: 'Email address'
	},
	installation: {
		type:    'input',
		name:    'installation',
		message: 'Installation instructions'
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
		type:    'input',
		name:    'tests',
		message: 'Test instructions'
	},
	title:        {
		type:    'input',
		name:    'title',
		message: 'What\'s the name of your project?'
	},
	usage:        {
		type:    'input',
		name:    'usage',
		message: 'Usage information'
	},
	userName:     {
		type:    'input',
		name:    'userName',
		message: 'GitHub username'
	}
};

const questions = [];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
	await fs.writeFile(fileName, data);
}

function getLicense(license) {
	return `This project is licensed under the ${license.name} - see the [${license.short} license](${license.link}) page for details.`;
}

async function promptUser(promptList) {
	// Clear old questions and add new ones.
	questions.length = 0;
	questions.push(...promptList.map(prompt => prompts[prompt]));

	// Return results
	return await inquirer.prompt(questions);
}

async function init() {
	// Prompt the user with questions.
	const [sections, license, contact] = await Promise.all([
		                                                       promptUser(['title', 'description', 'installation', 'usage', 'contribution', 'tests']),
		                                                       promptUser(['licenses']),
		                                                       promptUser(['userName', 'email'])
	                                                       ]);

	const content = {
		sections,
		license,
		contact
	};
}

// Function call to initialize app
init();
