const fs = require('fs');
const path = require('path');


function readJsonFile(filePath) {
  const absolutePath = path.resolve(__dirname, filePath);

  try {
    const data = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON file:", err);
    return null;
  }
}

module.exports = { readJsonFile };
