const upload = require("../middlewares/images_upload");
const dbConfig = require("../config/db");
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

const url = dbConfig.MONGO_URL;
const baseUrl = "http://localhost:5100/files/";
const mongoClient = new MongoClient(url);

async function uploadImage(req, res) {
  try {
    await upload(req, res);
    console.log(req.file);

    if (req.file == undefined) {
      return "You must select a file.";
    }

    return "File has been uploaded.";
  } catch (error) {
    console.log(error);
    return "Error when trying upload image: ${error}";
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

async function deleteImage(name) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);

    //get image id
    cursor = database
      .collection(dbConfig.imgBucket + ".files")
      .findOne({ filename: name });
    let found_id = await cursor._id;

    //delete image from .files collection
    cursor = await database
      .collection(dbConfig.imgBucket + ".files")
      .findOneAndDelete({ _id: found_id });
    let deleted_file_id = await cursor;
    console.log(deleted_file_id);

    //delete image from .chunks collection
    cursor = await database
      .collection(dbConfig.imgBucket + ".chunks")
      .deleteMany({ files_id: found_id });
    let deleted_chunck_id = await cursor;
    console.log(deleted_chunck_id);

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
