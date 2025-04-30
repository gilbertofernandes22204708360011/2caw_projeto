exports.test = function (req, res) {
  res.send('Olá! Teste ao Controller');
};

exports.details = function (req, res) {
  res.send({type: 'GET'});
};

exports.add = function (req, res) {
  res.send({type: 'POST'});
};

exports.update = function (req, res) {
  res.send({type: 'PUT'});
};

exports.delete = function (req, res) {
  res.send({type: 'DELETE'});
};