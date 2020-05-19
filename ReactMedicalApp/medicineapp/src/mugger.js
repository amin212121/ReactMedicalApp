const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MuggerSchema = new Schema({
    name: String,
    surname: String

});

const Mugger = mongoose.model("mugger", MuggerSchema);

module.exports = Mugger;
