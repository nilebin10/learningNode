var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
  response.setEncoding('UTF-8');
  response.on('data', function(data){
    console.log(data);
  });
  response.on('error', function(error){
    console.log(error);
  })
}).on('error',function(error){
  console.log(error);
});
