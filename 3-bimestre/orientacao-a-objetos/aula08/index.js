class Cofre {
    #codigo

    constructor(codigo) {
        this.#codigo = codigo
    }

    verificarCodigo(codigo) {
        return codigo === this.#codigo
    }
}

const cofre = new Cofre(1234)

console.log(cofre.verificarCodigo(1234)) // true
console.log(cofre.verificarCodigo(9999)) // false

export { cofre }
