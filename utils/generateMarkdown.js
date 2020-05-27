//The "/n" character is used to find a newline character.

function generateMarkdown(data) {
  return `
# ${data.title}\n  
**

#
${data.descript}\n
**

#
${data.table}\n
**

#
${data.installation}\n
**

#
${data.usage}\n
**

#
${data.credits}\n
**

#
${data.license}\n
**

#
${data.test}\n
**

#
${data.question}\n
**

## Question
*Github email address: ${data.email}\n
**

`;
}

module.exports = generateMarkdown;
// create an obj with key value pairs with the key words data and title.
// this function is being exported 