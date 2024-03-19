var express = require('express');
var router = express.Router();
const transactionsHandler = require('./handler/transactions');
// const verifyToken = require('./middlewares/verifyToken');
const can = require('../middlewares/permission');
/* GET users listing. */

router.get('/topups', transactionsHandler.getTopupTransactions);
router.post('/topups', can('member'), transactionsHandler.createSnapTopup);
router.post('/', can('member', 'admin'), transactionsHandler.create)
router.get('/', can('member', 'admin'), transactionsHandler.getAll)
router.get('/:id', can('member', 'admin'), transactionsHandler.get)

router.post('/cek-tagihan', can('member', 'admin'), transactionsHandler.cekTagihan);
router.post('/bayar-tagihan', can('member', 'admin'), transactionsHandler.bayarTagihan);
router.post('/cek-saldo', can('member', 'admin'), transactionsHandler.cekSaldo);
router.post('/cek-id-pln', can('member', 'admin'), transactionsHandler.cekIDPLN);
router.post('/deposit', can('member', 'admin'), transactionsHandler.deposit);



module.exports = router;
