const Veiculo = require("./Veiculo");

class Carro extends Veiculo {
    constructor(modelo, anoDeFabricacao) {
        super(modelo, anoDeFabricacao);

        this.registros = [];
    }

    detalhes() {
        return "Carro disponível para retirada";
    }

    adicionarRegistro(registro) {
        this.registros.push(registro);
    }
}

module.exports = Carro;
