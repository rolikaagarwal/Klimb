const XLSX = require("xlsx");

exports.convertExcelToJSON=(excelData)=> {
  const data = XLSX.read(excelData, { type: "buffer" });
  const jsonData = {};

  data.SheetNames.forEach((sheetName) => {
    const sheetData = data.Sheets[sheetName];
    const sheetRows = XLSX.utils.sheet_to_json(sheetData);

    jsonData[sheetName] = sheetRows;
  });

  return jsonData.Sheet1;
}