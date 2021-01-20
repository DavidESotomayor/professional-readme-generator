const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

const writeReadme = (answers, licenseType) => {
    console.log(answers);
    console.log(licenseType[answers.license])

    const { shield, link } = licenseType[answers.license]
    const readme = generateMarkdown(answers, link, shield)

    fs.writeFile('exampleREADME.md', readme, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
module.exports = writeReadme;
