# w9-Readme-Generator

## Description

This project is a command-line application that generates a professional and comprehensive README.md file for a new
project based on user inputs. It provides a structure that includes sections for Title, Description, Table of Contents,
Installation, Usage, License, Contributing, Tests, and Questions, enabling the developer to present their application in
a well-organized manner. It also supports adding license badges, GitHub profile, and email address for better
accessibility.

I took the opportunity to take the project beyond what was asked because sometimes you need to go back and edit 
things. Some regular expressions are added to parse the Readme sections, as well as other inputs, to be able to 
ensure that any data that is there is preserved, unless it is chosen to override it. The only thing that is going to 
stop this script in its tracks is going to be incorrect file permissions. Make sure the README.md has read and write 
access.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Installation requires that you have Node.js installed properly. You will also need to have inquirer installed. 
Beyond that, no extra permissions are necessary. If you have SELinux set to enforcing, make sure that the 
appropriate settings are set for that as well.

## Usage

### Execution

This application is run from the command line. To start, type:

```shell
node readme.js
```

Alternatively, the application can be run by adding the `--simple` argument:

```shell
node readme.js --simple
```

By supplying the `--simple` argument, the prompts that would otherwise open up your selected editor (vim by default),
everything will be handled in a single-lined `input` field. By default, `editor` is the input type.

If you aren't familiar with vim, or would prefer something else, you can change your default editor by setting the 
environmental variable from your command line (for example, nano) before executing the readme.js script:

```shell
export EDITOR=/usr/bin/nano
```

After execution, the script checks for an existing README.md in the current directory. If the file exists, you'll be 
given the option to:

- Update the existing file;
- Overwrite the existing file; or
- Cancel

If you choose to update the existing file, the values will be defaulted.

Upon successful completion of the questions, a README.md file will be created.

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

