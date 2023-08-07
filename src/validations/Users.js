const Joi = require("joi")

const createValidation = Joi.object({
    username : Joi.string().required().min(3),
    password : Joi.string().required().min(6),
    email : Joi.string().email().required().min(8)
})

module.exports = {
    createValidation
}