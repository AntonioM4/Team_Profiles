const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputpath = path.JSON(OUTPUT_DIR, 'team.html');

const render = require('./src/generateHTML')

const teamArray = [];
const questions = [{
    type: 'input',
    name: 'name',
    message: "Please enter the employee\'s: name:",
},

{
    type: 'input',
    name: 'id',
    message: "Please enter the employee\'s: id:",
},

{
    type: 'input',
    name: 'email',
    message: "Please enter the employee\'s email:",
}
];