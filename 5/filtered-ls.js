var fs = require('fs');
var path = require('path'); 
fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        return console.log(err);
    }
    // console.log(list)
    list.filter( el => path.extname(el) === '.' + process.argv[3] && console.log(el)) ;   
})