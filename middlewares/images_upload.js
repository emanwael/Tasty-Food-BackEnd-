const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/database");

var storage = new GridFsStorage({
  url: dbConfig.MONGO_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) return "file is not image";
    return {
      bucketName: dbConfig.imgBucket,
      filename: `itigp-${file.originalname.split(" ").join("-")}`,

      //// `${Date.now()}-talabat-${file.originalname.split(" ").join("-")}`
    };
  },
});

var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
