const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const PedidoSchema = new Schema(
    {
        produtos:{
            type:Array,
            required: [true,"Campo obrigatório"]

        },
        cliente:{
            type:String,
            required: [true,"Campo obrigatório"]

        },
        data_retirada:{
            type:Date,
            required: [true,"Campo obrigatório"]
        },
        valor_total:{
            type:Number,
            required: [true,"Campo obrigatório"]
        },
        
        forma_pagamento:{
            type:String,
            required: [true,"Campo obrigatório"]
       },
        
        status_pedido:{
            type:String,
            required: [true,"Campo obrigatório"]
        }
      
    }
);

const Pedido = mongoose.model("Pedido",PedidoSchema);

module.exports = Pedido;
