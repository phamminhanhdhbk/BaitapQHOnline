var fs = require('fs');
fileread =fs.createReadStream('filedoc.txt');
filewrite =fs.createWriteStream('filewrite.txt');
fileread.pipe(filewrite);
console.log('copied successfully ....');