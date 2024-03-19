const express = require('express');
const router = express.Router();

const productPrepaidHandler = require('./handler/product-prepaid')
/* GET users listing. */
router.post('/', productPrepaidHandler.create);
router.get('/', productPrepaidHandler.getAll);
router.get('/:id', productPrepaidHandler.get);


module.exports = router;
