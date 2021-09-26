// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

const { writeFile } = require('./utils/generateMarkdown.js')
const generatePage = require('./src/dist/page-template.js')

// TODO: Create an array of questions for user input
const promptUser = portfolioData => {
        // If there's no 'projects' array property, create one
        if (!portfolioData) {
            portfolioData = []
        }
        console.log(`
      =================
      Add a New Project
      =================
      `);
    return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Please Provide The Title of your Project. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please Provide The Title of your Project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'Description',
                message: 'Please Provide A Description of your Project. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please Provide your projects Description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'TableOfContents',
                message: 'Please Provide A Table of Contents. (Optional)',
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'Please Provide Installation Steps. (Optional)',
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'Please provide the usage of your application? (Optional)',
            },
            {
                type: 'input',
                name: 'Credits',
                message: 'List your collaborators, if any, with links to their GitHub profiles?',
            },
            {
                type: 'input',
                name: 'License',
                message: 'Provide license information (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your licence!');
                        return false;
                    }
                }
            }
        ])
        .then(projectData => {
            portfolioData.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
promptUser()
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .catch(err => {
        console.log(err)
    });
