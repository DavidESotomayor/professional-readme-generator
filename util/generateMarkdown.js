// function to generate markdown for README
function generateMarkdown(answers, link, shield) {
    return `# ${answers.title} <p style="float: right;"><a href="${link}"><img src="${shield}"></a></p>
    
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
This project falls under the license: 
[![${answers.license}](${shield})](${link})
    
### Questions
If you haven't already, and would like to visit my github profile, you can reach me at: ${answers.github_username}

Please feel free to reach out to me for any questions, comments, or concerns at : ${answers.email}

Copyright &copy; ${answers.first_last_name}`
}

module.exports = generateMarkdown;
