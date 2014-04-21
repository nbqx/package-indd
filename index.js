var fs = require('fs');
var archiver = require('archiver'),
    rimraf = require('rimraf'),
    jsx_manifest = require('jsx-manifest'),
    fakestk = require('fakestk');

var manifest = __dirname+'/resources/manifest.js';

function zipper(inp){
  var archive = archiver('zip');
  archive.bulk({expand: true, cwd: inp, src: ['**/*']});
  archive.finalize();
  return archive
};

function exec(data,next){
  jsx_manifest(manifest,data).on('build',function(script){
    if(next===undefined){
      fakestk.run(script);
    }else{
      fakestk.run(script,next);
    }
  });
};

function packageIndd(from,to){
  var data = {src: from, dst: to};
  return exec(data);
};

packageIndd.zipped = function(from,to,removeFolder){
  var data = {src: from, dst: to};
  var rf = (removeFolder===undefined)? true : removeFolder;

  return exec(data,function(){
    var out = fs.createWriteStream(data.dst+".zip");
    zipper(data.dst).pipe(out);
    out.on('close',function(){
      if(rf){
        rimraf.sync(data.dst);
      }
    });
  });
};

module.exports = packageIndd;
