const express = require("express");
const authentication = require("../middlewares/authentcation");
const Access = require("./Access");

const {
  getAllRestaurantAdmin,
  getRestaurantAdminById,
  updateRestaurantAdmin,
  deleteRestaurantAdminById,
  createRestaurantAdmin,
  signRestaurantAdminIn,
} = require("../controllers/restaurant_admins");
const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  Access(res);
  return res.json(await getAllRestaurantAdmin());
});

router.get("/:id", async (req, res) => {
  Access(res);
  return res.json(await getRestaurantAdminById(req.params.id));
});

//? register
router.post("/", async (req, res) => {
  Access(res);
  return res.json(await createRestaurantAdmin(req.body));
});

//? login
router.post("/signin", async (req, res) => {
  Access(res);
  return res.json(await signRestaurantAdminIn(req.body));
});

router.put("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await updateRestaurantAdmin(req.params.id, req.body));
});

router.patch("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await updateRestaurantAdmin(req.params.id, req.body));
});

router.delete("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await deleteRestaurantAdminById(req.params.id));
});

module.exports = router;
