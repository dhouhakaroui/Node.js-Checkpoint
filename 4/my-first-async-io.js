const fs = require('fs');
fs.readFile(process.argv[2],'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    const l = data.toString().split('\n').length - 1;
    console.log(l);
})
