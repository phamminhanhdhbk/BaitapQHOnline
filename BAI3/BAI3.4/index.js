
var zlib = require('zlib');
var fs = require('fs');

var fileread =fs.createReadStream('fileread.txt');

var filewrite =fs.createWriteStream('nen.txt.zip');

//nén thành file zip trong fileread và kết thúc show ra kết quả
fileread.pipe(zlib.createGzip()).pipe(filewrite).on('finish',function(){

console.log("Bạn đã nén file thành công");



});
