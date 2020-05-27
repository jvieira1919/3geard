const inquirer = require("inquirer");
const fs= require("fs");
const generatedMarkdown = require("./utils/generateMarkdown");
const path = require("path");

const questions = [
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write your description here.",
        name: "descript"
    },
    {
        type: "input",
        message: "table of content",
        name: "table"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "usage"
    },
    {
        type: "input", // ask kevin how to create a drop down type list. this list prompt must have choices but i want the user to create his/her own list. would i make the choices and open array?
        message: "List your collaborators.",
        name: "credits"
    }
];
// come up with readme type questions.
//create an obj and pass in data key and title.
// use inqurier in here.



function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(), fileName),data, function(err, result){
        if(err) console.log("error", err);
    });
}

function init() {
    inquirer.prompt(questions).then(function (response) {
     writeToFile("log.txt", generatedMarkdown({...response}))
});
}

init();
generatedMarkdown(data);

