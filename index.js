// const http = require("http")
// const { read_file } = require("./api/api")

// const app = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/demo") {
//     const data = read_file("data.json");
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//       "access-control-allow-origin": "*"});
//     res.end(JSON.stringify(data));
//   }else if(req.method === "POST" && req.url === "/add"){
//     console.log(req.on);
    
//   }
// })
// app.listen(3000, () => {
//   console.log("server is running on the http://localhost:3000");
// });

//- ------------ export and import -----------

//- ---------- with commonjs ---------------
// const {multiply, division}= require("./test")

// console.log(multiply(3, 6));
// console.log(division(18, 9));

//--------------- with module for single func ---------------

// import multiply from "./test.js";

// console.log(multiply(2, 5));

//----------------- with module for multiple func --------

// import {multiply, division} from "./test.js"
// console.log(multiply(2, 8));
// console.log(division(8, 2));


//-------------------- with module ----------------
// import fs from "fs"

// console.log(fs);

//---------------- BUFFER --------------

// let buff = Buffer.from("text")
// console.log(buff.toString());

//----------- alloc ------------
// const buffer = Buffer.alloc(10)
// console.log(buffer);

//----------- concat -----------

// let buf = Buffer.from("test");
// let buf1 = Buffer.from(" text-extra")
// let buf2 = Buffer.from(" test-next")
// let collected = [buf, buf1, buf2]

// let result = Buffer.concat(collected)
// console.log(result.toString());

//------------- video reading with buffer ----------

// const fs = require("fs")

// fs.readFile('video.mp4', (err, data) => {
//     if(err) throw err;
//     console.log('video file in buffer format:', data);
    
// })

//------------------- STREAM -----------------

//  ------------ read file ---------------
// const fs = require("fs")
// let readStream = fs.createReadStream("./test.txt")

// readStream.on("data", function(chunk) {
//     console.log(chunk);
    
// })

//------------------- converting to string ----------

// const fs = require("fs")
// let readStream = fs.createReadStream("./test.txt")
// let writeStream = fs.createWriteStream("output.txt")

// readStream.setEncoding("utf-8")
// readStream.on("data", function(chunk) {
//     console.log(chunk);
//     writeStream.write(chunk, "utf-8")
//     writeStream.end()
// })


//--------------- video reading with stream ----------

// const fs = require("fs")

// const videoStream = fs.createReadStream('video.mp4', {highWaterMark: 10 * 1024 * 1024})

// videoStream.on("data", (chunk) => {
//     console.log('Buffer olingan:', chunk);   
// })

// videoStream.on('end', () => {
//     console.log('video file is ended');
// })

//------------ global objects --------------

// console.log(__dirname);
// console.log(__filename);
// console.log(Buffer("test"));
// console.log(process.argv);
// console.log(process.env);

// let a = Buffer("simple")
// console.log(a.toString());

//------------- core modules ---------------------- 

