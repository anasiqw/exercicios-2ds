function validarPedido(req, res, next) {
    const { cliente, bebida, valor } = req.body

    if (!cliente) {
        return res.status(400).json({
            erro: "O campo cliente e obrigatorio"
        })
    }

    if (!bebida) {
        return res.status(400).json({
            erro: "O campo bebida e obrigatorio"
        })
    }

    if (typeof valor !== "number" || !Number.isFinite(valor)) {
        return res.status(400).json({
            erro: "O campo valor deve ser um numero"
        })
    }

    if (valor <= 0) {
        return res.status(400).json({
            erro: "O campo valor deve ser maior que zero"
        })
    }

    next()
}

module.exports = validarPedido