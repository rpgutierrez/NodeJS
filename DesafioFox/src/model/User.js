const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: { 
        type: String
    },
    telefone: { 
        type: String
    },
    email:{ 
        type: String
    },
    senha:{ 
        type: String
    },
    usuario:{
        type: String,
        unique: true
    }
})

const user = mongoose.model('User', DataSchema)
module.exports = user;