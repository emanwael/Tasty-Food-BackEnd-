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
async function signCustomerIn(email, password) {
  try {
    let customer = await customersModel.findOne({ email });
    if (customer.password == password) {
      return customer;
    } else {
      console.log("not blabla");
      return {};
    }
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

async function createCustomer(customerData) {
  try {
    return await customersModel.create(customerData);
  } catch (error) {
    console.log(error);
  }
}
async function deleteCustomerById(customerId) {
  try {
    return await customersModel.findByIdAndDelete(customerId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomerById,
  createCustomer,
  signCustomerIn,
};
