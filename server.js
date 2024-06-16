const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jokesRoutes = require('./routes/jokes.routes.js');
const conectarDB = require('./configuration/mongoose.config');

const app = express();
const PORT = 3000;

// Middleware para procesar body en formato JSON
app.use(bodyParser.json());

// Conectar a la base de datos MongoDB
conectarDB();

// Rutas de la API
app.use('/api', jokesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
