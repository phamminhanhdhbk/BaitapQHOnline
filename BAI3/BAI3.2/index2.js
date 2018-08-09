var fs = require('fs');
var readfile =fs.createReadStream('../BAI3.1/filedoc.txt');
var wf= fs.createWriteStream('note.txt');

readfile.on('data',function(chunk){

wf.write(chunk);

});
readfile.on('end',function(){

wf.end();
console.log("Copied successfuly ...");
});
