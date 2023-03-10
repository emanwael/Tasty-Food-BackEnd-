const express = require("express");
const Access = require("./Access");
const {
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrderById,
    createOrders } = require("../controllers/orders")


const router = express.Router();

router.use(express.json());


router.get("/", async (req, res) => {
    Access(res);

    return res.json(await getAllOrders());
});

router.get("/:id", async (req, res) => {
    Access(res);
    return res.json(await getOrderById(req.params.id));
});

router.post("/", async (req, res) => {
    Access(res);
    return res.json(await createOrders(req.body));
});

router.put("/:id", async (req, res) => {
    Access(res);
    return res.json(await updateOrder(req.params.id, req.body));
});
router.patch("/:id", async (req, res) => {
    Access(res);
    return res.json(await updateOrder(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    Access(res);
    return res.json(await deleteOrderById(req.params.id));
});


module.exports = router;
