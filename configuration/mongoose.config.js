const mongoose = require('mongoose');

module.exports = async function () {
  try {
    await mongoose.connect('mongodb://localhost:27017/chistesdb');
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detener la aplicación si no se puede conectar a MongoDB
  }
};