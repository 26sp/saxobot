const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})
function keepAlive(){
    server.listen(5000, ()=>{console.log("up")});
}
module.exports = keepAlive;