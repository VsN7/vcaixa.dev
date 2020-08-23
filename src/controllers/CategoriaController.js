const mongoose = require('mongoose');

const Categoria = mongoose.model('Categoria');

module.exports = {
  async index(req, res) {
    const categorias = await Categoria.find();
    return res.json(categorias);
  },

  async show(req, res) {
    const categoria = await Categoria.findById(req.params.id);
    return categoria;
  },

  async store(req, res) {
    const categoria = await Categoria.create(req.body);
    return res.json(categoria);
  },

  async update(req, res) {
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(categoria);
  },

  async destroy(req, res) {
    await Categoria.findByIdAndRemove(req.params.id);
    return res.send();
  },

  async buscarCategoriaPorId(req, res) {
    const categoria = await Categoria.findById(req.params.id);
    console.log(categoria)
    return res.json(categoria);
  },
};