## package-indd

package indd file or create packaged zip file (osx + CS5 only)

## Usage

```js
var fs = require('fs');
var packageIndd = require('package-indd');

var indd = __dirname+'/test.indd'; // indd file
var output = __dirname+'/test'; // folder name

// only packaging
packageIndd(indd,output);

// packaging + zipped
var removeWhenZipFileCreated = false; // default: true
packageIndd.zipped(indd,output,removeWhenZipFileCreated);
```

## TODO

* set `document.packageForPrint` options

