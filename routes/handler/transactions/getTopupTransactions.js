const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_TRANSACTION_PAYMENT
} = process.env;

const api = apiAdapter(URL_SERVICE_TRANSACTION_PAYMENT);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;
        const topupTransactions = await api.get('/api/topups', {
            params: {
                user_id: userId
            }
        });
        return res.json(topupTransactions.data);
    } catch (error) {
        if(error.code === "ECONNREFUSED"){
            return res.status(500).json({status: 'error', message: 'service tidak tersedia'})
        }

        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}