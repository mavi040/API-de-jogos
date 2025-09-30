import express from 'express';
import { buscarJogoPorId, buscarJogos, buscarJogoPorGenero, buscarJogoPorPlataforma} from './servicos/servico.js';

const app = express();

app.get('/jogos', (req, res) => {
  const generojogo = req.query.genero;
  const resultado = generojogo ? buscarJogoPorGenero(generojogo) : buscarJogos();

  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhuma UF encontrada" });
  }
});

app.get('/jogos/plataforma/:nomePlataforma', (req, res) => {
  const nomePlat = req.params.nomePlataforma;
  const resultado = nomePlat ? buscarJogoPorPlataforma(nomePlat) : buscarJogos();
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhuma UF encontrada" });
  }
});

app.get('/jogos/:id', (req, res) => {
  const jogoid = parseInt(req.params.id);

  if (isNaN(jogoid)) {
    return res.status(400).json({ erro: "Requisição inválida" });
  }

  const jogo = buscarJogoPorId(jogoid);

  if (jogo) {
    res.json(jogo);
  } else {
    res.status(404).json({ erro: "Jogo não encontrado" });
  }
});

app.get('/jogos/', (req, res) => {
  const jogosid = req.params.id;
  const resultado = buscarUfsPorSigla(jogosid);

  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhuma UF encontrada" });
  }
});



app.get('/ufs/inicial/:inicial', (req, res) => {
  const inicialUf = req.params.inicial;
  const resultado = buscarUfsPorInicial(inicialUf);

  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhuma UF encontrada" });
  }
});

app.listen(8080, () => {
  const data = new Date();
  console.log("Servidor iniciado na porta 8080 em: " + data);
});
