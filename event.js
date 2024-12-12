// const eventEmitter = require("events");
// const http = require("http");
// const emitter = new eventEmitter();

// class UserActivity extends eventEmitter {}
// const userAct = new UserActivity();
// const onlineUsers = new Map();

// const checkOfflineUser = () => {
//     const now = Date.now();
//   for (let [userIP, lastActivity] of onlineUsers) {
//     if (now - lastActivity > 5000) {
//         userAct.emit("offlineUser", userIP);
//       onlineUsers.delete(userIP);
//     }
//   }
// };

// const app = http.createServer((req, res) => {
//   if (req.url === "/connect") {
//       const now = Date.now();
//     const userIP = req.socket.remoteAddress;
//     onlineUsers.set(userIP, now);
//     userAct.emit("onlineUser", userIP);
//   } else {
//     res.writeHead(404, { "Content type": "text/plain" });
//     res.end("such API is not found");
//   }
// });

// userAct.on("onlineUser", (userIP) => {
//   console.log("online user: " + userIP);
// });
// userAct.on("offlineUser", (userIP) => {
//   console.log("offlineUser: ", userIP);
// });

// setInterval(checkOfflineUser, 5000);

// app.listen(3000, () => {
//   console.log("server is running on the http://localhost:3000/connect");
// });



// emitter.on("greet", (name) => {
//     console.log('salom ' + name);
// })

// emitter.emit('greet', 'feruz')
// emitter.emit('greet', 'feruz')