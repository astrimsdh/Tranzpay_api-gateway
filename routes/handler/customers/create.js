const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_DATA
} = process.env;

const api = apiAdapter(URL_SERVICE_DATA);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;
        const categoryId = req.body.category_id;
        const customerName = req.body.customer_name;
        const customerNo = req.body.customer_no;
        const customer = await api.post('/api/customers',{
            user_id: userId,
            category_id: categoryId,
            customer_name: customerName,
            customer_no: customerNo
        });
        return res.json(customer.data);
    } catch (error) {
        if(error.code === "ECONNREFUSED"){
            return res.status(500).json({status: 'error', message: 'service tidak tersedia'})
        }

        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}