const mongoose = require("mongoose");

const klimbDataSchema = new mongoose.Schema({}, { strict: false });

exports.Data = mongoose.model("klimbdata", klimbDataSchema);