const fs = require('fs');

const filePath = 'greetings.txt';
const content = 'Hello, world!';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(`Got an error trying to write to a file: ${err.message}`);
  } else {
    console.log(`Successfully wrote to ${filePath}`);
  }
});