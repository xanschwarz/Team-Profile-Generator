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

// Empty array that input will go in as one object per employee
// Prompt to ask for manager info (does this need to be in function?), ending with asking for more input, intern calls intern function, engineer calls engineer function, adds to global array

const managerInfo = () => {
    return inquirer
    // team manager’s name, employee ID, email address, and office number
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
        console.log(team);
    })
}

managerInfo();