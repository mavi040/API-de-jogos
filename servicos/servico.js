import colecaoJogos from '../dados/dados.js';

export const buscarJogos = () => {
    return colecaoJogos;
}

export const buscarJogoPorGenero = (generojogo) => {
    return colecaoJogos.filter(u => u.genero.toLowerCase().includes(generojogo.toLowerCase()))};

export const buscarJogoPorId = (id) => {
    const idjogo = parseInt(id);
    return colecaoJogos.find(u => u.id === idjogo);
};


export const buscarJogoPorPlataforma = (nomePlat) => {
    return colecaoJogos.filter(u => u.plataforma.toLowerCase().includes(nomePlat.toLowerCase()))};
