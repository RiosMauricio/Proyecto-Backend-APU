const Persona = require('../models/persona');
const personaCtrl = {}

personaCtrl.createPersona = async (req, res) => {
    var persona = new Persona(req.body); 
    try {
        await persona.save();
        res.json({
            'status': '1', 
            'msg': 'persona registrada.'
        })

    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

personaCtrl.getPersonas = async (req, res) => {
    var personas = await Persona.find(); 
    res.json(personas); 
}

personaCtrl.getPersona = async (req, res) => {
    try{
        const _id = req.params._id; 
        if (_id) persona = await Persona.find({_id: _id}) 
        res.json(persona); 
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'No se ha encontrado a esta persona.'
        })
    }
}


module.exports = personaCtrl;