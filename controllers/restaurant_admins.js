const restaurantAdminModel = require("../models/restaurant_admins");


async function getAllRestaurantAdmin() {
    try {
        return await restaurantAdminModel.find({});
    } catch (error) {
        console.log(error);
    }
}
async function getRestaurantAdminById(RestaurantAdminId) {
    try {
        return await restaurantAdminModel.findById(RestaurantAdminId).populate("restaurant");
    } catch (error) {
        console.log(error);
    }
}

async function updateRestaurantAdmin(RestaurantAdminId, RestaurantAdminData) {
    try {
        return await restaurantAdminModel.findByIdAndUpdate(RestaurantAdminId, RestaurantAdminData);
    } catch (error) {
        console.log(error);
    }
}

async function createRestaurantAdmin(RestaurantAdminData) {
    try {
        return await restaurantAdminModel.create(RestaurantAdminData);
    } catch (error) {
        console.log(error);
    }
}
async function deleteRestaurantAdminById(RestaurantAdminId) {
    try {
        return await restaurantAdminModel.findByIdAndDelete(RestaurantAdminId)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllRestaurantAdmin,
    getRestaurantAdminById,
    updateRestaurantAdmin,
    deleteRestaurantAdminById,
    createRestaurantAdmin,
};