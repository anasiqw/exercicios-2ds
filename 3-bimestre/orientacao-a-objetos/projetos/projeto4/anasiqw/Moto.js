const Veiculo = require("./Veiculo");

class Moto extends Veiculo {
    detalhes() {
        return "Moto disponível para retirada";
    }
}

module.exports = Moto;
