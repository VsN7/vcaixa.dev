const mongoose = require('mongoose');

const ResumoCaixa = mongoose.model('ResumoCaixa');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const resumosCaixa = await ResumoCaixa.paginate({}, { page, limit: 5,sort: { data: -1 } });
    return res.json(resumosCaixa);
  },

  async show(req, res) {
    const resumoCaixa = await ResumoCaixa.findById(req.params.id);
    return res.json(resumoCaixa);
  },

  async store(req, res) {
    const resumoCaixa = await ResumoCaixa.create(req.body);
    return res.json(resumoCaixa);
  },

  async update(req, res) {
    const resumoCaixa = await ResumoCaixa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(resumoCaixa);
  },

  async destroy(req, res) {
    await ResumoCaixa.findByIdAndRemove(req.params.id);
    return res.send();
  }
};