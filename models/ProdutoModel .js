const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema(
    {
        nome:{
            type:String;
            required: [true,"Campo obrigatório"]
        },
        detalhe:{
            type:String;
            required: [true,"Campo obrigatório"]
        },
        preco:{
            type:Float64Array;
            required: [true,"Campo obrigatório"]
        }
      
    }
);

const Produto = mongoose.model("Produto",ProdutoSchema);

module.exports = Produto;

