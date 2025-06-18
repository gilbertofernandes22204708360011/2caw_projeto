const express = require ('express');
const router = express.Router();// importa controlador 'apiController.js' da pasta: 

const apiController = require('../controllers/apiController');// url do teste será: http://localhost:5000/api/teste

router.get('/cria-cliente', apiController.create_cliente);module.exports = router;
router.get('/cria-pedido',apiController.create_pedido);
router.post('/atualiza-pedido',apiController.update_pedido);
module.exports = router;
