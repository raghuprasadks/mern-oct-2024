const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    console.log('request received at ',new Date())
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('response from server')
})

server.listen(port, 'localhost', () => {
    console.log(`server is running at ${port}`)
    })