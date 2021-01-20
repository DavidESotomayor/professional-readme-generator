const inquirer = require('inquirer');
const fs = require('fs');
const licenseType = {
  'MIT': {
    shield: 'https://img.shields.io/badge/license-MIT-blue.svg',
    link: 'https://opensource.org/licenses/MIT'
  }, 
  'Apache 2.0': {
    shield: 'https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg',
    link: 'https://opensource.org/licenses/Apache-2.0'

  },
  'GNU gplv3': {
    shield: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    link: 'https://www.gnu.org/licenses/gpl-3.0'    

  },
  'ISC': {
    shield: 'https://img.shields.io/badge/License-ISC-blue.svg',
    link: 'https://opensource.org/licenses/ISC'
  },
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'editor',
      name: 'description',
      message: 'Please add a description of your project: (once you\'re finsihed, make sure to close the editor and save the temp file so it is stored)'
    },
    {
      type: 'editor',
      name: 'installation',
      message: 'Please enter instructions for installing your project: (once you\'re finsihed, make sure to close the editor and save the temp file so it is stored)'
    },
    {
      type: 'editor',
      name: 'usage',
      message: 'Please explain the usage process of your application: (once you\'re finsihed, make sure to close the editor and save the temp file so it is stored)'
    },
    {
      type: 'editor',
      name: 'contribution',
      message: 'Please enter any information on how you would like contributors to help contribute to your project: (once you\'re finsihed, make sure to close the editor and save the temp file so it is stored)'
    },
    {
      type: 'editor',
      name: 'test_instructions',
      message: 'Please enter any instructions for testing out your project: (once you\'re finsihed, make sure to close the editor and save the temp file so it is stored)'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select the license that your project is protected under:',
      choices: Object.keys(licenseType)
    },
    {
      type: 'input',
      name: 'github_username',
      message: 'What is your github username so that others may reach you?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email so that others may reach you?'
    },
    {
      type: 'input',
      name: 'first_last_name',
      message: 'What is your first and last name?'
    }
  ])
  .then(answers => {
    console.log(answers);
    console.log(licenseType[answers.license])
    
    const { shield, link } = licenseType[answers.license]
    const readme = `# ${answers.title} <p style="float: right;"><a href="${link}"><img src="${shield}"></a></p>
    
  ## Description
  ${answers.description}
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test Instructions](#test-instructions)
  * [License](#license)
  * [Questions](#questions)

  ### Installation 
  ${answers.installation}

  ### Usage
  ${answers.usage}

  ### Contributions
  ${answers.contribution}

  ### Test Instructions
  ${answers.test_instructions}

  ### License
  This project falls under these license(s):
  ${answers.license}
    
  ### Questions
  If you haven't already, and would like to visit my github profile, you can reach me at: ${answers.github_username}

  Please feel free to reach out to me for any questions, comments, or concerns at : ${answers.email}

  Copyright &copy; ${answers.first_last_name}`

    fs.writeFile('exampleREADME.md', readme, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

  })
  .catch(console.log);