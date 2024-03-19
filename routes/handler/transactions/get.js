const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_TRANSACTION_PAYMENT
} = process.env;

const api = apiAdapter(URL_SERVICE_TRANSACTION_PAYMENT);

module.exports = async (req, res) => {
    try {
        const id =  req.params.id;
        const transction = await api.get(`/api/transactions/${id}`);
        return res.json(transction.data);
    } catch (error) {
        if(error.code === "ECONNREFUSED"){
            return res.status(500).json({status: 'error', message: 'service tidak tersedia'})
        }

        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}