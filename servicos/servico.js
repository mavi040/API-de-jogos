import colecaoJogos from "../dados/dados.js";

export const buscarJogos = () => {
    return colecaoPais;
}

export const buscarJogosPorNome = (nomejogo) => {
    return colecaoJogos.filter(u => u.jogo.toLowerCase().includes(nomejogo.toLowerCase()))
};

export const buscarJogosPorId = (id) => {
    const idJogo = parseInt(id);
    return colecaoJogos.find(uf => u.id === idJogo);
};