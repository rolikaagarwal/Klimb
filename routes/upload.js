const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadController } = require("../controller/upload");
const express = require("express");
const router = express.Router();
router.post("/", upload.single("file"),uploadController);

exports.router = router;