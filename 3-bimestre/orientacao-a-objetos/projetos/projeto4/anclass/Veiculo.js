class Veiculo {
    #modelo;
    #anoDeFabricacao;

    constructor(modelo, anoDeFabricacao) {
        this.#modelo = modelo;
        this.#anoDeFabricacao = anoDeFabricacao;
    }

    get modelo() {
        return this.#modelo;
    }

    get anoDeFabricacao() {
        return this.#anoDeFabricacao;
    }

    detalhes() {
        return "Veículo cadastrado no sistema";
    }
}

module.exports = Veiculo;
