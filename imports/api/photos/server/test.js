var fs = require('fs')

fs.readdir("./default", (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})