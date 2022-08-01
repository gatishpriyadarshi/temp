const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/subfolder/gatish.txt', 'utf8')

//console.log(first, second)
fs.writeFileSync('./content/result.txt', `${first}, ${second}`,{flag: 'a'})