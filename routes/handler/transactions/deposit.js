const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_TRANSACTION_PAYMENT
} = process.env;

const api = apiAdapter(URL_SERVICE_TRANSACTION_PAYMENT);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;
        const amount = req.body.amount;
        const bank = req.body.bank;
        const ownerName = req.body.owner_name;
        const transaction = await api.post('/api/deposit',{
            user_id: userId,
            amount: amount,
            bank: bank,
            owner_name: ownerName
        });
        return res.json(transaction.data);
    } catch (error) {
        if(error.code === "ECONNREFUSED"){
            return res.status(500).json({status: 'error', message: 'service tidak tersedia'})
        }

        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}