const express = require('express');
const { listen } = require('express/lib/application');
const server = express();
server.use(express.json());

const jogo = ['game'];

server.get('/ game', (req, res) => {
    const { index } = req.params;
    return res.json(game[index]);



})






server.listen(3000);