const Mongoose = require("mongoose")

const CommentSchema = Mongoose.Schema({
    text : String,
    comment_date : Date,
    channel_id : {
        type : Mongoose.Types.ObjectId,
        ref : "channel"
    },
    video_id : {
        type : Mongoose.Types.ObjectId,
        ref : "video"
    },
    user_id : {
        type : Mongoose.Types.ObjectId,
        ref : "user"
    },
},{timestamps : true, versionKey : false})

module.exports = Mongoose.model("comment", CommentSchema)