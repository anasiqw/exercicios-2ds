const app = require("./index")

const porta = Number(process.env.PORT) || 3000

app.listen(porta, () => {
    console.log(`Servidor aberto: http://localhost:3000`)
})