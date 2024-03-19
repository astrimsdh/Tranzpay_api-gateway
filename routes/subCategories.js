const express = require('express');
const router = express.Router();

const subCategoriesHandler = require('./handler/sub-categories')
/* GET users listing. */
router.post('/', subCategoriesHandler.create);
router.put('/:id', subCategoriesHandler.update);
router.delete('/:id', subCategoriesHandler.destroy);
router.get('/:id', subCategoriesHandler.get);
router.get('/', subCategoriesHandler.getAll);


module.exports = router;
