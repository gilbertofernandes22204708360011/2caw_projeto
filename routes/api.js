const express = require ('express');
const router = express.Router();// importa controlador 'apiController.js' da pasta: 

const apiController = require('../controllers/apiController');// url do teste será: http://localhost:5000/api/teste

router.get('/teste', apiController.test);module.exports = router;
router.get('/details',apiController.details);
router.post('/interest',apiController.add);
router.put('/interest/:id',apiController.update);
router.delete('/interest/:id',apiController.delete);module.exports = router;