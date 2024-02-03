[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)

# Readme Generator

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



## Contribution

Let's work together

## Tests

Any testing can be done on your own.


## Questions

For any questions, please feel free to reach out.

- GitHub: [https://github.com/rayxis](https://github.com/rayxis)
- Email: [ray+portfolio@raybeliveau.com](ray+portfolio@raybeliveau.com)

Please ensure to mention the project in the subject line for the email to get a prompt response.

## License

This project is licensed under the GNU General Public License - see the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0) page for details.

