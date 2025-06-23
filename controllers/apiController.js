const Cliente = require("../models/ClienteModel");
const Produto = require("../models/ProdutoModel")
const Pedido = require("../models/PedidoModel");


exports.create_cliente = function (req, res,next) {
    Cliente.create(req.body).then(function(cliente){res.send(cliente)}).catch(next);
};

exports.create_pedido = function (req, res,next) {
    Pedido.create(req.body).then(function(pedido){res.send(pedido)}).catch(next);
};
exports.create_produto = function (req, res,next) {
    Produto.create(req.body).then(function(produto){res.send(produto)}).catch(next);
};
exports.update_pedido = function (req, res, next) {
  Pedido.findByIdAndUpdate({_id: req.params.id},
      req.body).then(function(pedido){
    res.send(pedido);
}).catch(next);
};

exports.update_cliente = function (req, res, next) {
  Cliente.findByIdAndUpdate({_id: req.params.id},
      req.body).then(function(cliente){
    res.send(cliente);
}).catch(next);
};

exports.update_produto= function (req, res, next) {
  Produto.findByIdAndUpdate({_id: req.params.id},
      req.body).then(function(produto){
    res.send(produto);
}).catch(next);
};


exports.login= function (req, res, next) {
  Cliente.find({usuario: req.params.usuario, senha: req.params.senha},
      req.body).then(function(){
    res.redirect("index.html");
}).catch(next)
    {
        res.send(next)
    };
}


