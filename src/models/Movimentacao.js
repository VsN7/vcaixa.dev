const mongoose = require('mongoose');
const Categoria = require('./Categoria.js')

const MovimentacaoSchema = new mongoose.Schema({ 
  tipo: {
    type: String
  },
  valor: {
    type: Number
  },
  descricao: {
    type: String
  },

  data: {
    type: Date
  },
  categoria: {
    type: Categoria
  }
});

mongoose.model('Movimentacao', MovimentacaoSchema);