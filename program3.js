var fs = require('fs');

var mytext = fs.readFileSync(process.argv[2]).toString();

var splittext = mytext.split("\n").length-1;
console.log(splittext);