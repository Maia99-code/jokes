const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');



// Rutas para operaciones CRUD de bromas
router.get('/bromas', jokesController.obtenerTodos);
router.get('/bromas/:id', jokesController.obtenerUno);
router.post('/bromas', jokesController.crearUno);
router.put('/bromas/:id', jokesController.actualizarUno);
router.delete('/bromas/:id', jokesController.eliminarUno);

module.exports = router;