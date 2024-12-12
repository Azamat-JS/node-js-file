
const http = require('http')
const {read_file, write_file} = require('./api/api.js')
require('dotenv').config()
const PORT = process.env.PORT || 4000

const app = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === "/get_info"){
        const info = read_file('phone.json')
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(info))
    }else if(req.method === 'POST' && req.url === "/post_info"){
        req.on('data', (chunk) => {
         const newInfo = JSON.parse(chunk)
         const ourFile = read_file('phone.json')
         ourFile.push({
            id: Symbol('id'),
            ...newInfo
         })
         write_file('phone.json', ourFile)
         res.writeHead(201, {'Content-type': 'application/json'})
         res.end(JSON.stringify({
             message: 'added new info'
        }))
        })
    }

})
app.listen(PORT, () => {
    console.log('server is running on the port ' + PORT);
})
