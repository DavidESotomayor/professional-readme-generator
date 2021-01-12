const inquirer = require('inquirer');
// const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installing your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain the usage process of your application:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contributions that may have helped in your project:'
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: 'Please enter any instructions for testing out your project:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter the license that your project is protected under:'
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
    }
  ])
  .then(answers => {
    console.log(answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });