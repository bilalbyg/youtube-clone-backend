const Video = require("../models/Video.js")

const list = () => {
    return Video.find({});
}

const listById = (id) => {
    return Video.findById(id)
}

const insert = (videoData) => {
    const video = new Video(videoData)
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
    listById
}