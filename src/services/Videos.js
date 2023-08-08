const Video = require("../models/Video.js")

const list = () => {
    return Video.find({});
}

const insert = (videoData) => {
    const video = new Video(videoData)
    console.log(videoData);
    return video.save()
}

const modify = (where, updateData) => {
    return Video.findOneAndUpdate(where, updateData, {new : true})
}

const remove = (id) => {
    return Video.findByIdAndDelete(id)
}

module.exports = {
    list,
    insert,
    modify,
    remove,
}