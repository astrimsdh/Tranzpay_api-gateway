const express = require('express');
const router = express.Router();

const brandsHandler = require('./handler/brands')
/* GET users listing. */
router.get('/', brandsHandler.getAll);
router.get('/:id', brandsHandler.get);
router.post('/', brandsHandler.create);
router.put('/:id', brandsHandler.update);
router.delete('/:id', brandsHandler.destroy);


module.exports = router;
