// Require the necessary packages, modules, and subclasses. Define the team empty array to store user input.
const fs = require('fs');
const inquirer = require('inquirer');
const generateTeamHTML = require("./src/generateHTML.js")
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];

// Function to be called after every team member input is provided. Asks if user would like to enter another team member's
// details or if the entire team has been added.
const additionalEmployeeAsk = () => {
    return inquirer
    .prompt ([
        {
            type: 'list',
            name: 'addQuery',
            message: 'Would you like to add additional team members?',
            choices: ['Add an engineer', 'Add an intern', 'All team members added, finish building my team']
        },
    ])
    .then((response) => {
        if (response.addQuery == 'Add an engineer') {
            // Call function to add an engineer.
            engineerInfo();
        }
        else if (response.addQuery == 'Add an intern') {
            // Call function to add an intern.
            internInfo();
        }
        else {
            console.log('Team complete! Generating team page.')
            // Call function to write the team page HTML.
            fs.writeFile('./dist/index.html', generateTeamHTML(team), (err) => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log('Team page created! Please see index.html in the dist folder.');
                }
            });
        }
    })
};

// Function to prompt the user for the team manager's details.
const managerInfo = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name."
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please enter the team manager's employee ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email address."
        },
        // Specific to the manager subclass is their office number.
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number."
        }
    ])
    // Once the manager's details have been given, push those details to the empty team array and ask the user if they
    // would like to add more employees or if the team is complete.
    .then((data) => {
        team.push(data);
        additionalEmployeeAsk();
    })
};

// Function to prompt the user for an engineer team member's details.
const engineerInfo = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name."
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please enter the engineer's employee ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address."
        },
        // Specific to the engineer subclass is their github username.
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username."
        }
    ])
    // Once the engineer's details have been given, push those details to the empty team array and ask the user if they
    // would like to add more employees or if the team is complete.
    .then((data) => {
        team.push(data);
        additionalEmployeeAsk();
    })
};

// Function to prompt the user for an intern team member's details.
const internInfo = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name."
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please enter the intern's employee ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address."
        },
        // Specific to the intern subclass is the school they are attending.
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school name."
        }
    ])
    // Once the intern's details have been given, push those details to the empty team array and ask the user if they
    // would like to add more employees or if the team is complete.
    .then((data) => {
        team.push(data);
        additionalEmployeeAsk();
    })
};

// Upon start of index.js, run this initial function which calls the function to ask the user for the team manager's details.
function init() {
    managerInfo();
}

init();