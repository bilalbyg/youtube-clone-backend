const Comment = require("../models/Comment.js")

const list = () => {
    return Comment.find({});
}

const listByVideoId = (videoId) => {
    return Comment.find({video_id : videoId});
}

const listById = (id) => {
    return Comment.findById(id)
}

const insert = (commentData) => {
    const comment = new Comment(commentData)
    return comment.save()
}

const modify = (where, updateData) => {
    return Comment.findOneAndUpdate(where, updateData, {new : true})
}

const remove = (id) => {
    return Comment.findByIdAndDelete(id)
}

module.exports = {
    list,
    insert,
    modify,
    remove,
    listById,
    listByVideoId
}