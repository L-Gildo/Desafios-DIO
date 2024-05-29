//ESCREVENDO AS CLASSES DE UM JOGO
// DEFININDO A CLASSE DE HERÓIS
class Heroi {
    constructor(tipo, ataque) {
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
        return `O ${this.tipo} atacou usando ${this.ataque}`;
    }
}
// FUNÇÃO PARA CRIAR HERÓIS
function criarHerois() {
    const tipos = ['Mago', 'Ninja', 'Monge', 'Guerreiro'];
    const ataques = ['magia', 'shuriken', 'artes marciais', 'espada'];

    let herois = [];

    for (let i = 0; i < tipos.length; i++) {
        let heroi = new Heroi(tipos[i], ataques[i]);
        herois.push(heroi);
    }

    return herois;
}
// FUNÇÃO PARA EXIBIR OS ATAUES DOS HERÓIS
function exibirAtaques(herois) {
    herois.forEach(heroi => {
        console.log(heroi.atacar());
    });
}
// CRIANDO HERÓIS E EXIBINDO SEUS ATAQUES
const herois = criarHerois();
exibirAtaques(herois);
