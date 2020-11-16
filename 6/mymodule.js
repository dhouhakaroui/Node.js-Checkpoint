var fs=require('fs');
var path = require('path');
module.exports =function(dir,extension,callback){
    fs.readdir(dir,'utf8',(err,data)=>{  
        if(err) { return callback(err)}         
        return callback(null,data.filter(el=>path.extname(el) ==='.' + extension ))        
    })
}