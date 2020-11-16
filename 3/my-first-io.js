const fs = require('fs');
const d = fs.readFileSync(process.argv[2])
const l = d.toString().split('\n').length - 1
console.log(l)