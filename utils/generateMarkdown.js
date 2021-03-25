const licenseNameToBadgeMarkdown = {
  apache: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  cc: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
};

const getBadgeMarkdown = (licenseName) => {
  return licenseNameToBadgeMarkdown[licenseName.toLowerCase()];
};

const generateMarkdown = (data) => `# ${data.title}
${getBadgeMarkdown(data.license)}
## Description
${data.description}
## Table of contents
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
## License
This project uses the ${data.license} license.
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
[Your GitHub](http://github.com/${data.github})
Your Email:
<${data.email}>
`;

module.exports = generateMarkdown;
