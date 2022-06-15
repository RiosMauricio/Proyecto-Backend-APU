const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.createTransaccion = async (req, res) => {
    var nuevaTransaccion = new Transaccion (req.body); 
    try {
        await nuevaTransaccion.save(); 
        res.json({
            'status': '1',
            'msg': 'Transaccion creada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al dar de alta transaccion'
        })
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find(); 
    res.json(transacciones); 
}

transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    try{
        const email = req.params.emailCliente; 
        if(email) transacciones = await Transaccion.find({emailCliente: email}) 
        res.json(transacciones);
    }catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al filtrar transacciones'
        })
    }
}

transaccionCtrl.getTransaccionesOrigenDestino = async (req, res) => {
    try{
        const origen = req.params.monedaOrigen; 
        const destino = req.params.monedaDestino; 
        if (origen && destino) transacciones = await Transaccion.find({
            $and: [
                {monedaOrigen: origen},
                {monedaDestino: destino}
            ]
        })  
        res.json(transacciones);
    } catch(error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al filtrar transacciones'
        })   
    }

}

module.exports = transaccionCtrl;