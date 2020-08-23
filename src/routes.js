const express = require('express');
const routes = express.Router();

const ResumoCaixaController = require('./controllers/ResumoCaixaController.js');
const CategoriaController = require('./controllers/CategoriaController.js');
const MovimentacaoController = require('./controllers/MovimentacaoController.js');
const UserController = require('./controllers/UsuarioController.js');

routes.get('/usuario', UserController.index);
routes.post('/usuario', UserController.store);
routes.put('/usuario/:id', UserController.update);
routes.delete('/usuario/:id', UserController.destroy);
routes.get('/usuario/:email', UserController.verificar);

routes.get('/resumoCaixa', ResumoCaixaController.index);
routes.get('/resumoCaixa/:id', ResumoCaixaController.show);
routes.post('/resumoCaixa', ResumoCaixaController.store);
routes.put('/resumoCaixa/:id', ResumoCaixaController.update);
routes.delete('/resumoCaixa/:id', ResumoCaixaController.destroy);

routes.get('/categoria', CategoriaController.index);
routes.get('/categoria/:id', CategoriaController.show);
routes.post('/categoria', CategoriaController.store);
routes.put('/categoria/:id', CategoriaController.update);
routes.delete('/categoria/:id', CategoriaController.destroy);
routes.get('categoria/id/:id', CategoriaController.buscarCategoriaPorId);

routes.get('/movimentacao', MovimentacaoController.index);
routes.get('/movimentacao/data/:data', MovimentacaoController.listarResumoCaixaPorData);
routes.post('/movimentacao', MovimentacaoController.store);
routes.put('/movimentacao/:id', MovimentacaoController.update);
routes.delete('/movimentacao/:id', MovimentacaoController.destroy);
routes.get('/movimentacao/:id', MovimentacaoController.show);

module.exports = routes;