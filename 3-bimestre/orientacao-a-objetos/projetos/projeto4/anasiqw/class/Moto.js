const Veiculo = require("./Veiculo");

class Moto extends Veiculo {
    constructor(modelo, anoDeFabricacao) {
        super(modelo, anoDeFabricacao);
    }

    detalhes() {
        return "Moto disponível para retirada";
    }
}

module.exports = Moto;