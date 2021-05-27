const mongoose = require("mongoose")
module.exports = mongoose.model("Question", new mongoose.Schema({
    question: String,
    type: String,
    choices: [String],
    yes: String,
    no: String
}))
