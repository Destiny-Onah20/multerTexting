const express = require("express");
const { createNewpost } = require("../controller/postContrl");
const image = require("../helpers/multer")

const postRoutes = express.Router();
postRoutes.post("/",image, createNewpost)


module.exports = postRoutes;