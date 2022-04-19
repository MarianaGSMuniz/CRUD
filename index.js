const express = require('express');
const { listen } = require('express/lib/application');
const server = express();
server.use(express.json());

const jogo = ['game'];

server.get('/ game', (req, res) => {
    const { index } = req.params;
    return res.json(game[index]);
});

// criar novo game

server.post('/ game', req, res => {
    const (name) = req.body;
    game.push(name);
    return res.json(game);
});

// atualizar game

server.put('/game/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    game[index] = name;

    return res.json(game);
});

//deletarjogos







server.listen(3000);