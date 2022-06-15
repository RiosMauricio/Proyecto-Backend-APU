const Pasaje = require('../models/pasaje');
const pasajeCtrl = {}

pasajeCtrl.createPasaje = async (req, res) => {
    var pasaje = new Pasaje(req.body); 
    try {
        await pasaje.save(); 
        console.log("hola")
        res.json({
            'status': '1',
            'msg': 'Pasaje cargado.'
        })
    }catch(error)
    {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

pasajeCtrl.getPasajes = async (req, res) => {
    var pasajes = await Pasaje.find().populate("pasajero"); 
    res.json(pasajes);
}

pasajeCtrl.deletePasaje = async (req, res) =>{
    try{
        await Pasaje.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            msg: 'Pasaje eliminado'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

pasajeCtrl.editPasaje = async (req, res) =>{
    const nuevo = new Pasaje(req.body); 
    try{
        await Pasaje.updateOne({_id: req.body._id}, nuevo);
        res.json({
            'status': '1',
            'msg': 'Pasaje actualizado'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

pasajeCtrl.getPasaje = async (req, res) => {
    try {
        const categoria = req.params.categoriaPasajero
        if (categoria) pasajes = await Pasaje.find({ categoriaPasajero: categoria }).populate("pasajero");
        res.status(200).json(pasajes)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al filtrar los pasajes"
        })
    }
}


module.exports = pasajeCtrl;