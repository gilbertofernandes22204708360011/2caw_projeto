const express = require ('express');
const router = express.Router();// importa controlador 'apiController.js' da pasta: 

const apiController = require('../controllers/apiController');// url do teste será: http://localhost:5000/api/teste

router.post('/cria-cliente', apiController.create_cliente);
router.post('/cria-pedido',apiController.create_pedido);
router.post('/cria-produto',apiController.create_produto);
router.post('/login',apiController.login);
router.post('/atualiza-pedido',apiController.update_pedido);
router.post('/atualiza-produto',apiController.update_produto);
router.post('/atualiza-cliente',apiController.update_cliente);

module.exports = router;
