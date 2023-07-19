const mongoose = require("mongoose");
const XLSX = require("xlsx");
const async = require("async");
const { Data } = require("../model/upload");
exports.uploadController = async (req, res) => {
  const file = req.file;
  const filePath = file.path;
  try {
    const result = parse(filePath);
    const data = result[0].data;
    const headerRow = data[0];
    const filteredData = data
      .slice(1)
      .filter((row) => row.length > 0)
      .map((row, index) => {
        const filteredData = {};
        row.forEach((value, columnIndex) => {
          const property = headerRow[columnIndex];
          filteredData[property] = value;
        });
        filteredData.rowId = index + 1;
        return filteredData;
      });
    // console.log(filteredData)
    await async.eachSeries(filteredData, async (singledata) => {
      try {
        if (
          typeof singledata === "object" &&
          (singledata.hasOwnProperty("Email") ||
            singledata.hasOwnProperty("email"))
        ) {
          const existingData = await Data.findOne({
            $or: [{ Email: singledata.Email }, { email: singledata.email }],
          });
          // if (existingData) {
          //   console.log("already there");
          // }

          const newData = new Data(singledata);
          await newData.save();
          console.log("inserted");
        } else {
          res.json();
          console.log("email is a mandatory field");
          // await collection.insertOne(singledata);
        }
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "unable to process file due to some errors" });
  }
};
const parse = (filename) => {
  const excelData = XLSX.readFile(filename);
  return Object.keys(excelData.Sheets).map((name) => ({
    name,
    data: XLSX.utils.sheet_to_json(excelData.Sheets[name], { header: 1 }),
  }));
};
