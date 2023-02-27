const customersModel = require("../models/customers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

//? login function
async function signCustomerIn({ email, password }) {
  try {
    let customer = await customersModel.findOne({ email });
    if (customer && (await bcrypt.compare(password, customer.password))) {
      const token = jwt.sign(
        { user_id: customer._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "4h" }
      );
      customer.token = token;
      return customer;
    } else return {};
  } catch (error) {
    console.log(error);
  }
}

//? register function
async function createCustomer({
  customer_name,
  address,
  phone_number,
  email,
  password,
}) {
  try {
    let customer = await customersModel.find({ email });
    if (customer.length > 0) {
      return {};
    } else {
      let encryptedPassword = await bcrypt.hash(password, 10);

      customer = await customersModel.create({
        customer_name,
        address,
        phone_number,
        email,
        password: encryptedPassword,
      });
      const token = jwt.sign(
        { user_id: customer._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "4h" }
      );
      customer.token = token;
      return customer;
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateCustomer(customerId, { password, ...customer }) {
  try {
    let encryptedPassword = await bcrypt.hash(password, 10);
    customer.password = encryptedPassword;
    return await customersModel.findByIdAndUpdate(customerId, customer, {
      new: true,
    });
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
