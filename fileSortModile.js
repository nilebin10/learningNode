var path = require('path');
var fs = require('fs');
var mymodule = require('./myModule');

var dirname = process.argv[2];
var extension = process.argv[3];

function myFn(err,data){
  if(err){
    return err;
  }
  else{
    data.forEach(function(item){
        console.log(item);
    })
  }
}

mymodule(dirname,extension,myFn);
