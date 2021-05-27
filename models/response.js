const mongoose = require("mongoose")
module.exports = mongoose.model("Response", new mongoose.Schema({
    response: Object
}))
