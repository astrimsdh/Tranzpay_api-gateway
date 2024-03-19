const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_DATA
} = process.env;

const api = apiAdapter(URL_SERVICE_DATA);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;
        const customers = await api.get('/api/customers', {
            params: {user_id: userId}
        });
        return res.json(customers.data);
    } catch (error) {
        if(error.code === "ECONNREFUSED"){
            return res.status(500).json({status: 'error', message: 'service tidak tersedia'})
        }

        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}