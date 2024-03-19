const express = require('express');
const router = express.Router();

const customersHandler = require('./handler/customers')
/* GET users listing. */
router.get('/', customersHandler.getAll);
router.get('/:id', customersHandler.get);
router.post('/', customersHandler.create);
router.put('/:id', customersHandler.update);
router.delete('/:id', customersHandler.destroy);


module.exports = router;
