const express = require("express");
const multer = require("multer");
const { uploadController } = require("../controller/upload");

const upload = multer({
  storage: multer.memoryStorage(),

  fileFilter: function (req, file, cb) {
    if (
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.mimetype === "application/vnd.ms-excel"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .xls and .xlsx is allowed."));
    }
  },
});

const multerMiddleware = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) return res.status(400).send({ message: err.message });
    next();
  });
};

const router = express.Router();
router.post("/", multerMiddleware, uploadController);

exports.router = router;
