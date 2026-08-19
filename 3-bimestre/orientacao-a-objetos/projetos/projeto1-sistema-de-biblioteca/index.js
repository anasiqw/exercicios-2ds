class Livro{
    constructor(titulo , autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = true
    }

    estaDisponivel(){
        if(this.disponivel === true){
           return this.disponivel 
        }else{
            return this.disponivel
        }
    }

    emprestar(){
        return this.disponivel = false
    }
    devolver(){
        if(Livro.disponivel === true){
            return console.log("esse livro ja foi devolvido")
        }else{
            return this.disponivel = true
        }
    }
}

const livro = new Livro(
    "O Hobbit",
    "J.R.R. Tolkien",
    1937
)

livro.estaDisponivel()

module.exports = Livro