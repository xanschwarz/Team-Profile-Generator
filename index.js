/* ---------------------------------------------------         Developer notes         ------------------------------------------------------


Gitignore node modules, anything else not necessary to install app. Remember to start walkthrough video with pre-install setup.

Take user input to accomplish the following:

1. Prompt for team members and their information to generate an HTML file that displays a nicely formatted team roster based on user input.
2. Clicking on an email address in the HTML causes default email program to open and populates the "TO:" field of the email with the address.
3. Clicking on the GitHub username opens that GitHub profile in a new tab.
4. Starting the application (node index.js) begins prompts to enter the team manager’s name, employee ID, email address, and office number.
5. Upon entering the team manager’s name, employee ID, email address, and office number, app presents a menu with the option to add an engineer
or an intern or to finish building the team.
6. Selecting the engineer option prompts to enter the engineer’s name, ID, email, and GitHub username, then takes user back to the menu.
7. Selecting the intern option prompts to enter the intern’s name, ID, email, and school, then takes user back to the menu.
8. Selecting "Finish building my team" exits the application, and the HTML is generated.

------------------------------------------------------------------------------------------------------------------------------------------ */

const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];
const generateTeamHTML = require("./src/generateHTML.js")

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
            // Call function to add an intern
            internInfo();
        }
        else {
            console.log('Team complete! Generating team page.')
            // Call function to write the team page HTML
            // console.log(generateTeamHTML(team))
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
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number."
        }
    ])
    .then((data) => {
        team.push(data);
        additionalEmployeeAsk();
    })
};

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
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username."
        }
    ])
    .then((data) => {
        team.push(data);
        additionalEmployeeAsk();
    })
};

const internInfo = () => {
    return inquirer
    // name, id, email, school
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
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school name."
        }
    ])
    .then((data) => {
        team.push(data);
        additionalEmployeeAsk();
    })
};

function init() {
    managerInfo();
}

init();