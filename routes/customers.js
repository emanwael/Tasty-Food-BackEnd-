const express = require("express");
const authentication = require("../middlewares/authentcation");
const Access = require("./Access");
//
const {
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomerById,
  createCustomer,
  signCustomerIn,
} = require("../controllers/customers");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  Access(res);
  return res.json(await getAllCustomers());
});

router.get("/:id", async (req, res) => {
  Access(res);
  return res.json(await getCustomerById(req.params.id));
});
//? login
router.post("/signin", async (req, res) => {
  Access(res);
  return res.json(await signCustomerIn(req.body));
});
//? register
router.post("/", async (req, res) => {
  Access(res);
  return res.json(await createCustomer(req.body));
});
router.put("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await updateCustomer(req.params.id, req.body));
});
router.patch("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await updateCustomer(req.params.id, req.body));
});

router.delete("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await deleteCustomerById(req.params.id));
});

module.exports = router;
