// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return 'https://img.shields.io/static/v1?label=license&message=MIT&color=informational';
      break;

    case 'GNU GPLv3':
      return 'https://img.shields.io/static/v1?label=license&message=GPL-3.0&color=informational';
      break;

    case 'Apache License 2.0':
      return 'https://img.shields.io/static/v1?label=license&message=<Apache-2.0>&color=informational';
      break;

    default:
      console.error("Unable to render license badge", license);
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/';

    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0.html';

    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT License':
      return 'This project is protected under the [MIT License](https://choosealicense.com/licenses/mit/)';
      break;
    
    case 'GNU GPLv3':
      return 'This project is protected under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html)';
      break;

    case 'Apache License 2.0':
      return 'This project is protected under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
      break;

    default: 
      console.error('Unable to render license section', license);
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![license](${renderLicenseBadge(data.license)})

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  <add screenshots here>
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing

  ${data.contribution}
  
  ## Tests

  ${data.tests}

  ## Questions
  
  Feel free to contact me with any questions you may have!

  Github: https://github.com/${data.github}

  Email: ${data.email}`;
}

module.exports = generateMarkdown;
