const Mongoose = require("mongoose")

const VideoSchema = Mongoose.Schema({
    name : String,
    comments : [String],
    duration : String,
    channel_id : {
        type : Mongoose.Types.ObjectId,
        ref : "channel"
    },
    video_url : String,
    thumbnail : String,
    views : String,
    upload_date : Date,
    description : String
},{timestamps : true, versionKey : false})

module.exports = Mongoose.model("video", VideoSchema)