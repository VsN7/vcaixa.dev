const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  
});

UsuarioSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UsuarioSchema);