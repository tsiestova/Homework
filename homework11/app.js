//
const http = require('http');
const mod = require('./personalmodule');
const os = require("os");
const path = require('path');
let userName = os.userInfo().username;
const port = 5000;

const server = http.createServer((req, res) => {
    res.end(`
        <html lang="en"> 
            <head></head>
            <body> 
                <h2>System information</h2>
                  <div>Current user name: ${os.userInfo().username}</div> 
                  <div>OS type: ${os.type()}</div> 
                  <div>System work time: ${(os.uptime()/60).toFixed(2)} minuts</div> 
                    <div>Current work directory: ${process.cwd()}</div> 
                   <div>Server file name: ${__filename.split(path.sep).slice(-1)}</div>
                   <hr> 
                   <div>Day of request: ${new Date()}</div>
            <div>${mod.greeting(userName)}</div> 
            </body>
        </html> 
    `);
});

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});




