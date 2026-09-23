const Carro = require("./Carro");
const Moto = require("./Moto");
const Caminhao = require("./Caminhao");

class VeiculoFactory {
    static criar(tipo, nome, ano) {
        switch (tipo) {
            case "carro":
                return new Carro(nome, ano);

            case "moto":
                return new Moto(nome, ano);

            case "caminhao":
                return new Caminhao(nome, ano);

            default:
                throw new Error("Tipo de veículo inválido");
        }
    }
}

module.exports = VeiculoFactory;
