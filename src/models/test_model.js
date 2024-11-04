const mongoose = require("mongoose")

const testSchema = new mongoose.Schema({
    test : String
})

const testModel = mongoose.model('test',testSchema)

module.exports = testModel