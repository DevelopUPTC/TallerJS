const http = require('http')

const PORT = 3000

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("Hello World!!")
    res.end()
}).listen(PORT)

console.log(`Server liste at port ${PORT}`)