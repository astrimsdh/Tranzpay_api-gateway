var express = require('express');
var router = express.Router();
const webhookHandler = require('./handler/webhook')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/webhook-topup', webhookHandler.webhookTopup);
router.post('/webhook-digiflaz', webhookHandler.webhookDigiflaz);


module.exports = router;
