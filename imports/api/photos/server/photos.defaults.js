var fs = Npm.require('fs')
var path = Npm.require('path');

let photosDefault=[]

var basePath = path.join(__meteor_bootstrap__.serverDir, "../web.browser/app/default");

fs.readdir(basePath, (err, files) => {
  files.forEach(file => {
   let image = fs.readFileSync(basePath+'/'+file)
        photosDefault.push({
            name : file,
            photo : image
        })
  });
})

module.exports = photosDefault


    