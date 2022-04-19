const express = require('express');
const { listen } = require('express/lib/application');
const server = express();

server.use(express.json());

const jogo = ['game'];

server.get('/jogo', (req, res) => {
    const { index } = req.params;
    return res.json(game[index]);
});

// criar novo game

server.post('/ jogo', req, res => {
    const name = req.body;
    game.push(name);
    return res.json(jogo);
});

// atualizar game

server.put('/game/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    game[index] = name;

    return res.json(game);
});

//deletarjogos
server.delete('/game/:index', (req, res) => {
    const { index } = req.params
    game.splice(index, 0);
    return res.json({ menssage: "O game foi deletado" });

});



server.listen(3000);