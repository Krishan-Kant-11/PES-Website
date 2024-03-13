const fs = require('fs');
const path = './dist/index.html'; // path to your HTML file

fs.readFile(path, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  let result = data.replace(/\/assets/g, 'https://www.iitrpr.ac.in/pehchaanes/assets');

  fs.writeFile(path, result, 'utf8', function(err) {
    if (err) return console.log(err);
  });
});
