var arr = process.argv.slice(2);
var sum = 0;
arr.forEach(function(item){
    sum = sum + (+item);
});

console.log(sum);
