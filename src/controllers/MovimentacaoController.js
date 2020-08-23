const mongoose = require('mongoose');
const moment = require('moment')
const Movimentacao = mongoose.model('Movimentacao');

module.exports = {
  async index(req, res) {
    const movimentacoes = await Movimentacao.find();
    return res.json(movimentacoes);
  },

  async listarResumoCaixaPorData(req, res) {
    var dataString = moment(new Date(req.params.data)).format('YYYY/MM/DD')
    const movimentacoes = await Movimentacao.find({ data: moment(dataString, 'YYYY/MM/DD').toDate()});
    return res.json(movimentacoes);
  },

  async show(req, res) {
    const movimentacao = await Movimentacao.findById(req.params.id);
    return res.json(movimentacao);
  },

  async store(req, res) {
    const movimentacao = await Movimentacao.create(req.body);
    return res.json(movimentacao);
  },

  async update(req, res) {
    const movimentacao = await Movimentacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(movimentacao);
  },

  async destroy(req, res) {
    await Movimentacao.findByIdAndRemove(req.params.id);
    return res.send();
  }
};