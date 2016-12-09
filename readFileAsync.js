var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function(err, data){
  var newline = data.toString().split('\n').length - 1;
  console.log(newline);
});
