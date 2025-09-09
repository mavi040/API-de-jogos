//import colecaoUf from "./dados/dados.js";
import express from 'express';
import { buscarJogos, buscarJogosPorId, buscarJogosPorGenero, buscarJogosPorPlataforma } from './servicos/servico.js';

const app = express();

//app.get('/jogos/', (req, res) => {
    //const idjogo = req.query.busca;
    //const resultado = idjogo ? buscarJogosPorId(idjogo) : buscarJogos();

    //if (resultado.length > 0) {res.json(resultado);
    //} else {
      //  res.status(404).send({ "erro": "Nenhum Jogo encontrado" })
    //}
//});

app.get('/jogos/:idjogos', (req, res) => {
    const idJogo = parseInt(req.params.id);
    const jogo = buscarJogosPorId(idJogo)
 
    if (jogos) {
        res.json(jogo)
    } else if(isNaN(idJogo)) {
        res.status(400).json({ "erro": "Requisição inválida" });
    }else{
        res.status(404).json({ "erro": "Pais não encontrado" });
    }
})

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor iniciado na porta 8080 em: " + data);
})

