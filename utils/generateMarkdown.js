//The "/n" character is used to find a newline character.

function generateMarkdown(data) {
  return `
# ${data.title}\n  
**

#
${data.descript}\n
**

#
* [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
**

#
${data.installation}
**

#
${data.usage}
**

#
${data.credits}
**

#
${data.license}
**

## Test
* You can run a test with command line ${data.test}
**

## Questions
${data.question}
**

## Question
*Github email address: ${data.email}
**

`;
}

module.exports = generateMarkdown;
// create an obj with key value pairs with the key words data and title.
// this function is being exported 