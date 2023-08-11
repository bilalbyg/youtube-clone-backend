const Mongoose = require("mongoose")

const ChannelSchema = Mongoose.Schema({
    name : String,
    subscribers : [String],
    joined_date : Date,
    cover_image : String,
    background_image : String,
    about : String
}, {timestamps : true, versionKey : false})

module.exports = Mongoose.model("channel", ChannelSchema)