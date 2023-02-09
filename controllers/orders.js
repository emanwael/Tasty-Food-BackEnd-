const ordersModel = require("../models/orders");

async function getAllOrders() {
    try {
        return await ordersModel.find({});
    } catch (error) {
        console.log(error);
    }
}
async function getOrderById(OrderId) {
    try {
        return await ordersModel.findById(OrderId);
    } catch (error) {
        console.log(error);
    }
}

async function updateOrder(OrderId, OrderData) {
    try {
        return await ordersModel.findByIdAndUpdate(OrderId, OrderData);
    } catch (error) {
        console.log(error);
    }
}

async function createOrders(OrderData) {
    try {
        return await ordersModel.create(OrderData);
    } catch (error) {
        console.log(error);
    }
}
async function deleteOrderById(OrderId) {
    try {
        return await ordersModel.findByIdAndDelete(OrderId)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrderById,
    createOrders,
};