const customersModel = require("../models/customers");

async function getAllCustomers() {
    try {
        return await customersModel.find({});
    } catch (error) {
        console.log(error);
    }
}
async function getCustomerById(customerId) {
    try {
        return await customersModel.findById(customerId);
    } catch (error) {
        console.log(error);
    }
}

async function updateCustomer(customerId, customerData) {
    try {
        return await customersModel.findByIdAndUpdate(customerId, customerData);
    } catch (error) {
        console.log(error);
    }
}

async function createCustomers(customerData) {
    try {
        return await customersModel.create(customerData);
    } catch (error) {
        console.log(error);
    }
}
async function deleteCustomerById(customerId) {
    try {
        return await customersModel.findByIdAndDelete(customerId)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomerById,
    createCustomers,
};