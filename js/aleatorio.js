const nomes = ["Juca", "Giuliana", "Ricardo", "Angela", "Serjão", "Osvaldina"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
