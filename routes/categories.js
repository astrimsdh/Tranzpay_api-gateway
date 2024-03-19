const express = require('express');
const router = express.Router();

const categoriesHandler = require('./handler/categories')
/* GET users listing. */
router.get('/', categoriesHandler.getAll);
router.get('/:id', categoriesHandler.get);
router.post('/', categoriesHandler.create);
router.put('/:id', categoriesHandler.update);
router.delete('/:id', categoriesHandler.destroy);


module.exports = router;
