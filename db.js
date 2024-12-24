const fs = require('fs');

exports.readDB = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

exports.writeDB = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};
