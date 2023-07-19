const async = require("async");
const { Data } = require("../model/upload");
const { convertExcelToJSON } = require("../utils/excelToJson");

exports.uploadController = async (req, res) => {
  const file = req.file;
  const bufferData = file.buffer;
  try {
    const filteredData = convertExcelToJSON(bufferData);

    await async.eachSeries(filteredData, async (singleData) => {
      if (singleData.hasOwnProperty("Email")) {

        const existingData = await Data.find({ Email: singleData.Email });

        if (existingData && existingData.length === 0) {
          const newData = new Data(singleData);
          const savedData = await newData.save();
        } else {
          console.log("existed");
        }
      } else {
        console.log("Email is Mendatory");
      }
    });

    res.status(200).json({ message: "Uploaded Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Error" });
  }
};