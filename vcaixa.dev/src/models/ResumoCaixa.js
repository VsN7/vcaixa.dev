const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Movimentacao = require('./Movimentacao.js')

const ResumoCaixaSchema = new mongoose.Schema({
  
  saldoTotal: {
    type: Number,
    required: true
  },
  movimentacoes: [
    Movimentacao
  ]
});

ResumoCaixaSchema.plugin(mongoosePaginate);

mongoose.model('ResumoCaixa', ResumoCaixaSchema);