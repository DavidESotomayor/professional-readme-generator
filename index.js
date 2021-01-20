const inquirer = require('inquirer');
const licenseType = require('./util/licenseTypes')
const getPrompt = require('./util/getPrompt')
const writeReadme = require('./util/writeReadme')

inquirer
  .prompt(getPrompt(licenseType))
  .then((answer) => {
    writeReadme(answer, licenseType)
  })
  .catch(console.log);