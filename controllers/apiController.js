exports.test = function (req, res) {
  res.send('Olá! Teste ao Controller');
};

exports.details = function (req, res) {
  res.send({type: 'GET'});
};

exports.add = function (req, res) {
console.log('Você fez um requerimento POST : ', req.body);
  res.send({
   type: 'POST',
   nome: req.body.nome,
   email: req.body.email,
   telefone: req.body.telefone,
   senha: req.body.senha      
    });
};

exports.update = function (req, res) {
  res.send({type: 'PUT'});
};

exports.delete = function (req, res) {
  res.send({type: 'DELETE'});
};