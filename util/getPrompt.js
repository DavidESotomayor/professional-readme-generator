// function to generate markdown for README
function getPrompt(license) {
  return [
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
      choices: Object.keys(license)
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
  ]
}

module.exports = getPrompt;
