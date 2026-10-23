const express = require('express')

const router = express.Router()

const saboresRouter = require('./sabores')
const clientesRouter = require('./clientes')

router.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API de Sorveteria'
  })
})

router.use('/sabores', saboresRouter)
router.use('/clientes', clientesRouter)

module.exports = router