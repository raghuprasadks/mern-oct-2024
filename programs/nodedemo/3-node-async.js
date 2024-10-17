const fs = require('fs')

console.log("start")

fs.readFile('data.txt', 'utf8', (err, data) => {
    console.log("inside callback")
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

console.log("end")