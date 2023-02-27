const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["access-token"];
  if (!token)
    return res.status(403).send("a token is required for authentication");
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    console.log(error);
  }
  return next();
};

module.exports = verifyToken;
