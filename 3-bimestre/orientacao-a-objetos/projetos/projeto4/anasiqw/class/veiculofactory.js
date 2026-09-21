const Carro = require("./carro");
const Moto = require("./moto");
const Caminhao = require("./caminhao");

class VeiculoFactory {
    static criar(tipo, modelo, anoDeFabricacao) {
        switch (tipo) {
            case "carro":
                return new Carro(modelo, anoDeFabricacao);

            case "moto":
                return new Moto(modelo, anoDeFabricacao);

            case "caminhao":
                return new Caminhao(modelo, anoDeFabricacao);

            default:
                throw new Error("Tipo de veículo inválido");
        }
    }
}

module.exports = VeiculoFactory;