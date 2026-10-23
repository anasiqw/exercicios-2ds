const express = require('express')

const router = express.Router()

const sabores = [
  { id: 1, nome: 'Chocolate', base: 'leite', preco: 10, disponivel: true },
  { id: 2, nome: 'Morango', base: 'leite', preco: 10, disponivel: true },
  { id: 3, nome: 'Limao', base: 'agua', preco: 8, disponivel: false }
]

router.get('/', (req, res) => {
  res.status(200).json(sabores)
})

router.get('/disponiveis', (req, res) => {
  const disponiveis = sabores.filter(sabor => sabor.disponivel === true)

  res.status(200).json(disponiveis)
})

router.get('/total', (req, res) => {
  res.status(200).json({
    total: sabores.length
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    mensagem: 'Cadastro de sabor realizado'
  })
})

module.exports = router