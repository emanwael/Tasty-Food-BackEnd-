const upload = require("../middlewares/images_upload");
const dbConfig = require("../config/database");
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

const url = dbConfig.MONGO_URL;
const baseUrl = "http://localhost:5100/files/";
const mongoClient = new MongoClient(url);

async function uploadImage(req, res) {
  try {
    await upload(req, res);
    if (req.file == undefined) {
      return "You must select a file.";
    }
    return baseUrl + `itigp-${req.file.originalname.split(" ").join("-")}`;
  } catch (error) {
    return `Error when trying upload image: ${error}`;
  }
}

async function getImageByID(_id) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    return await database
      .collection(dbConfig.imgBucket + ".files")
      .findOne({ _id });
  } catch (error) {
    return error.message;
  }
}
async function getImageByName(filename) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    return await database
      .collection(dbConfig.imgBucket + ".files")
      .findOne({ filename });
  } catch (error) {
    return error.message;
  }
}
async function getAllImages() {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);

    const images = database.collection(dbConfig.imgBucket + ".files");
    const cursor = images.find({});
    if ((await cursor.count()) === 0) {
      return "No files found!";
    }
    let fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: baseUrl + doc.filename,
      });
    });
    return fileInfos;
  } catch (error) {
    return error.message;
  }
}

async function downloadImage(name, res) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    const bucket = new GridFSBucket(database, {
      bucketName: dbConfig.imgBucket,
    });
    let downloadStream = bucket.openDownloadStreamByName(name);

    downloadStream.on("data", function (data) {
      return res.status(200).write(data);
    });

    downloadStream.on("error", function (err) {
      return res.status(404).send({ message: "Cannot download the Image!" });
    });

    downloadStream.on("end", () => {
      return res.end();
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function deleteFromFiles(_id) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    //delete image from .files collection
    return await database
      .collection(dbConfig.imgBucket + ".files")
      .findOneAndDelete({ _id });
  } catch (error) {
    return `Error trying to delete the image ${error}`;
  }
}
async function deleteFromChunks(files_id) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    //delete image from .chunks collection
    return await database
      .collection(dbConfig.imgBucket + ".chunks")
      .deleteMany({ files_id });
  } catch (error) {
    return `Error trying to delete the image ${error}`;
  }
}

async function deleteImage(name) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    //get image id
    cursor = await database
      .collection(dbConfig.imgBucket + ".files")
      .findOne({ filename: name });
    let filesDeleted = await deleteFromFiles(cursor._id);
    let chunksDeleted = await deleteFromChunks(cursor._id);
    return "file deleted successfully";
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  uploadImage,
  getAllImages,
  downloadImage,
  deleteImage,
};
