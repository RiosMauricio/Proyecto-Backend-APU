//defino controlador para el manejo de CRUD
const personaCtrl = require('./../controllers/persona.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de personas
router.post('/', personaCtrl.createPersona);
router.get('/', personaCtrl.getPersonas); 
router.get('/:_id', personaCtrl.getPersona); 
//exportamos el modulo de rutas
module.exports = router;