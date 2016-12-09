var path = require('path');
var fs = require('fs');

var dirname = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirname, function(err, data){
  if(err){
    return err;
  }
  else{
    data.forEach(function(item){
      if(path.extname(item) === ("."+ extension)){
        console.log(item);
      }
    });
  }
})
