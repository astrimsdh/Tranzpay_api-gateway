const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_TRANSACTION_PAYMENT
} = process.env;

const api = apiAdapter(URL_SERVICE_TRANSACTION_PAYMENT);

module.exports = async (req, res) => {
    try {
        const productPasca = await api.post('/api/get-product-pasca');
        return res.json(productPasca.data);
    } catch (error) {
        if(error.code === "ECONNREFUSED"){
            return res.status(500).json({status: 'error', message: 'service transaksi tidak tersedia'})
        }

        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}