const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
    name: String,
    desciption: String,
    image: String,
});
module.exports = mongoose.model("Course", Course);
