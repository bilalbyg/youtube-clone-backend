const User = require("../models/User.js")

const list = () => {
    return User.find({});
}

const listById = (id) => {
    return User.findById(id)
}

const insert = (userData) => {
    const user = new User(userData)
    console.log(userData);
    return user.save()
}

const modify = (where, updateData) => {
    return User.findOneAndUpdate(where, updateData, {new : true})
}

const remove = (id) => {
    return User.findByIdAndDelete(id)
}

const loginUser = (loginData) => {
    return User.findOne(loginData)
}

module.exports = {
    list,
    listById,
    insert,
    modify,
    remove,
    loginUser
}