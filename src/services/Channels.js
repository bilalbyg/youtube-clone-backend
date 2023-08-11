const Channel = require("../models/Channel")

const list = () => {
    return Channel.find({})
}

const listById = (id) => {
    return Channel.findById(id)
}

const insert = (channelData) => {
    const channel = new Channel(channelData)
    return channel.save()
}

const modify = (where, updateData) => {
    return Channel.findOneAndUpdate(where, updateData, { new : true })
}

const remove = (id) => {
    return Channel.findByIdAndDelete(id)
}

module.exports = {
    list, insert, modify, remove, listById
}