const express = require('express');
const router = express.Router();

const productPascaHandler = require('./handler/product-pasca')
/* GET users listing. */
router.post('/', productPascaHandler.create);
router.get('/', productPascaHandler.getAll);
router.get('/:id', productPascaHandler.get);


module.exports = router;
