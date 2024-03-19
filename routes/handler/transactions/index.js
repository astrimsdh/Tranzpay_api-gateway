const getTopupTransactions = require('./getTopupTransactions');
const createSnapTopup = require('./createSnapTopup');
const create = require('./create');
const get = require('./get');
const getAll = require('./getAll');
const cekTagihan = require('./cekTagihan');
const bayarTagihan = require('./bayarTagihan');
const cekSaldo = require('./cekSaldo');
const cekIDPLN = require('./cekIDPLN');
const deposit = require('./deposit');


module.exports = {
    getTopupTransactions,
    createSnapTopup,
    create, get, getAll, cekTagihan, bayarTagihan, cekSaldo, cekIDPLN, deposit
}