var http = require('http');
var bl = require('bl'); 

var result = [];
var urls = process.argv.slice(2);
urls.forEach((url, i)=> {
    http.get(url, (res)=> {
        res.pipe(bl((err, data)=> {
            if (err) return console.log(err);
            result[i] = data.toString();
            if (i === urls.length - 1) {console.log(result.join('\n'));}
        }));
    });
});