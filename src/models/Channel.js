const Mongoose = require("mongoose")

const ChannelSchema = Mongoose.Schema({
    name : String,
    subscribers : [String],
    joined_date : Date,
    cover_image : String,
    background_image : String,
    videos : [String],
    about : String
})

module.exports = Mongoose.model("user", UserSchema)