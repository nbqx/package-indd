{
  header: ["#target InDesign-7.0"],
  src: ["tpl.jsx"],
  preProcess: {
    "tpl.jsx": function(body,opt){
      var content = "var DATA = "+JSON.stringify(opt)+";";
      body = body.replace(/(\/\* @options\{\{ \*\/)(.|\n|\r|\u2028|\u2029)+(\/\* \}\}@options \*\/)/g, content);
      return body
    }
  }
}
