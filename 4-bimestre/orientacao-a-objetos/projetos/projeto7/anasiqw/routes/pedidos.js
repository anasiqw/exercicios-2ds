const express = require("express")
const validarPedido = require("../middlewares/validarPedido")

const router = express.Router()

let pedidos = [
    { id: 1, cliente: "Ana", bebida: "Espresso", valor: 8, status: "servido" },
    { id: 2, cliente: "Bruno", bebida: "Cappuccino", valor: 14, status: "preparando" },
    { id: 3, cliente: "Carla", bebida: "Cha Verde", valor: 10, status: "preparando" }
]

router.get("/", (req, res) => {
    let resultado = pedidos

    const { status, valorMin } = req.query

    if (status) {
        resultado = resultado.filter(pedido => pedido.status === status)
    }

    if (valorMin !== undefined) {
        resultado = resultado.filter(pedido => pedido.valor >= Number(valorMin))
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const pedido = pedidos.find(pedido => pedido.id === id)

    if (!pedido) {
        const erro = new Error("Pedido nao encontrado")
        erro.status = 404

        return next(erro)
    }

    res.status(200).json(pedido)
})

router.post("/", validarPedido, (req, res) => {
    const { cliente, bebida, valor } = req.body

    const maiorId = Math.max(...pedidos.map(pedido => pedido.id))

    const novoPedido = {
        id: maiorId + 1,
        cliente,
        bebida,
        valor,
        status: "recebido"
    }

    pedidos.push(novoPedido)

    res.status(201).json({
        mensagem: "Registro de pedido criado"
    })
})

module.exports = router