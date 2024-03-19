const express = require('express');
const router = express.Router();

const productsHandler = require('./handler/products')
/* GET users listing. */
router.post('/', productsHandler.create);
router.put('/:id', productsHandler.update);
router.delete('/:id', productsHandler.destroy);
router.get('/:id', productsHandler.get);
router.get('/', productsHandler.getAll);
router.post('/get-by-number', productsHandler.getByNumber);


module.exports = router;
