const Veiculo = require("./Veiculo");

class Caminhao extends Veiculo {
    detalhes() {
        return "Caminhão disponível para retirada";
    }
}

module.exports = Caminhao;
