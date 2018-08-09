var fs = require('fs');
var ws =fs.WriteStream('note.txt');

ws.write('Tôi muốn ghi nội dung này vào file note.txt');
ws.end();