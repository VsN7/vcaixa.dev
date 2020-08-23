const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors')
const app = express();

app.use(express.json({ limit: '50mb' }));

app.use(cors());
 
mongoose
  .connect(
    'mongodb+srv://vitor:533596vsn@cluster0-mmqlk.mongodb.net/server?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');
// Rotas
app.use('/api', require('./src/routes'));

//endereço:3000/api/rotaDaAplicação
app.listen(process.env.PORT || 3000);