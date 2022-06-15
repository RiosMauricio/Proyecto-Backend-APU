//defino controlador para el manejo de CRUD
const pasajeCtrl = require('./../controllers/pasaje.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de libro
router.get('/', pasajeCtrl.getPasajes);
router.post('/', pasajeCtrl.createPasaje);
router.delete('/', pasajeCtrl.deletePasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.get('/:categoriaPasajero', pasajeCtrl.getPasaje);

//exportamos el modulo de rutas
module.exports = router;