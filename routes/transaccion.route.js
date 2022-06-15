//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de libro
router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:emailCliente', transaccionCtrl.getTransaccionesCliente);
router.get('/moneda/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesOrigenDestino);
//exportamos el modulo de rutas
module.exports = router;