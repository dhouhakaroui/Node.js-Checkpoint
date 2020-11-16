// console.log(process.argv)

var sum=process.argv.slice(2).reduce((a, c) => a + parseInt(c),0)
console.log(sum)