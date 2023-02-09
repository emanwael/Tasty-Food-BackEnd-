const express = require("express");
const mongoose = require("mongoose");
// 
const { getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomerById,
    createCustomers, } = require("../controllers/customers");


const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    return res.json(await getAllCustomers());
});

router.get('/:id', async (req, res) => {
    return res.json(await getCustomerById(req.params.id));
});

router.post('/', async (req, res) => {
    return res.json(await createCustomers(req.body));
});
router.put('/:id', async (req, res) => {
    return res.json(await updateCustomer(req.params.id, req.body));
});
router.patch('/:id', async (req, res) => {
    return res.json(await updateCustomer(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    return res.json(await deleteCustomerById(req.params.id));
});



module.exports = router;