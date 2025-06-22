const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema(
    {
        nome:{
            type:String,
            required: [true,"Campo obrigatório"]
        },
        email:{
            type:String,
            required: [true,"Campo obrigatório"]
        },
        telefone:{
            type:String,
            required: [true,"Campo obrigatório"]
        },
        senha:{
            type:String,
            required: [true,"Campo obrigatório"]
        },
      
    }
);

const Cliente = mongoose.model("Cliente",ClienteSchema);

module.exports = Cliente;

