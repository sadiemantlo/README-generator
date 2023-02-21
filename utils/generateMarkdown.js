function generateMarkdown(data) {

  let gitUser = 'https://github.com/' + data.github;
  let licenseDisplay;
  let licenseLink;

  if (data.license === 'MIT' ? licenseDisplay = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    : data.license === 'Apache' ? licenseDisplay = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    : data.license === 'GPL' ? licenseDisplay = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    : data.license === 'none' ? licenseDisplay = ''
    : console.log('crying'))

  if (data.license === 'MIT' ? licenseLink = '[MIT License](https://opensource.org/licenses/MIT)'
    : data.license === 'Apache' ? licenseLink = '[Apache License](https://opensource.org/licenses/Apache-2.0)'
    : data.license === 'GPL' ? licenseLink = '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)'
    : data.license === 'none' ? licenseLink = 'N/A'
    : console.log('crying'))
  return `# **${data.title}** ${licenseDisplay}

  ## **Description** 

  ${data.description}

  ## **Table of Contents**

  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)

  ## **Installation**

  ${data.installation}

  ## **Usage**

  ${data.usage}

  ## **License**

  ${licenseLink}

  ## **Contributing**

  ${data.contributing}

  ## **Tests**

  ${data.tests}

  ## **Questions**

  If you have any questions, feel free to contact me via email: ${data.email}.
  Here is a link to my [GitHub](${gitUser}).

`;
}

module.exports = generateMarkdown;