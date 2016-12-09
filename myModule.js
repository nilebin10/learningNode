var fs = require('fs');
var path = require('path');

function moduleFn(dir, ext, callback){
  fs.readdir(dir,function(err, data){
    var files = [];
    if(err){
      return callback(err);
    }
    else{
      data.forEach(function(item){
        if(path.extname(item) === ("."+ ext)){
          files.push(item);
        }
      });

      callback(null,files);
    }
  })
}

//var module1 = {};
//module1.moduleFn = moduleFn;

module.exports = moduleFn;
