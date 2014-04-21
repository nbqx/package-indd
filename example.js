var fs = require('fs');
var packageIndd = require('.');

var indd = __dirname+'/test.indd'; // indd file
var output = __dirname+'/test'; // folder name

// only packaging
packageIndd(indd,output);

// packaging + zipped
var removeWhenZipFileCreated = false; // default: true
packageIndd.zipped(indd,output,removeWhenZipFileCreated);

// packaging + zipped + stream
packageIndd.zipped(indd,output,true,function(zipped){
  // or http request etc...
  zipped.pipe(fs.createWriteStream(__dirname+'/data.zip'));
});

