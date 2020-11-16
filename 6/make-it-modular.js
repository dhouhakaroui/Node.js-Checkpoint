const mymodule=require('./mymodule.js')
mymodule(process.argv[2],process.argv[3],(error,data)=>{
    if(error){
        return console.log(error) ;       
    }
    return data.map(el=>console.log(el))
})