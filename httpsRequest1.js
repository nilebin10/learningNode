var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
  var string = '';
  response.setEncoding('UTF-8');
  response.on('data', function(data){
    string = string + data;
  });
  response.on('end', function(){
    console.log(string.length);
    console.log(string);
  })
}).on('error',function(error){
  console.log(error);
});
