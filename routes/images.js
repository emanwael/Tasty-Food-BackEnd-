const express = require("express");
const Access = require("./Access");

const router = express.Router();
const {
  uploadImage,
  getAllImages,
  downloadImage,
  deleteImage,
} = require("../controllers/images");

router.get("/", async (req, res) => {
  Access(res);
  return res.json(await getAllImages());
});
router.get("/:name", async (req, res) => {
  Access(res);
  return await downloadImage(req.params.name, res);
});
router.post("/", async (req, res) => {
  Access(res);
  return res.json(await uploadImage(req, res));
});
router.put("/:name", async (req, res) => {
  Access(res);
});
router.delete("/:name", async (req, res) => {
  Access(res);
  return res.json(await deleteImage(req.params.name));
});

module.exports = router;
