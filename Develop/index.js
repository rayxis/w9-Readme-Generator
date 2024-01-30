// Packages
const fs       = require('fs').promises;
const inquirer = require('inquirer');

// Licenses
const licenses  = {
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
		link: 'http://creativecommons.org/licenses/by/4.0/',
		name: 'Creative Commons Attribution 4.0 International',
		short: 'CC BY 4.0'
	},
	gpl3:    {
		link: 'https://opensource.org/licenses/GPL-3.0',
		name: 'GNU General Public License ',
		short: 'GPL-3.0'
	},
	lgpl3:   {
		link: 'https://opensource.org/licenses/LGPL-3.0',
		name: 'GNU Lesser General Public License ',
		short: 'LGPL-3.0'
	},
	mit:     {
		desc: 'MIT License (MIT)',
		link: 'https://opensource.org/licenses/Apache-2.0',
		name: 'MIT License'
	}
};

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function writeLicense() {
	const licenseText = `This project is licensed under the ${licenseType}`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
