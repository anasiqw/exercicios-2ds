const Veiculo = require("./Veiculo");

class Caminhao extends Veiculo {
    constructor(modelo, anoDeFabricacao) {
        super(modelo, anoDeFabricacao);
    }

    detalhes() {
        return "Caminhão disponível para retirada";
    }
}

module.exports = Caminhao;