const Joi = require("joi")

const createValidation = Joi.object({
    username : Joi.string().required().min(3),
    password : Joi.string().required().min(6),
    email : Joi.string().email().required().min(8),
    profile_image : Joi.string()
})

const updateValidation = Joi.object({
    _id : Joi.string().required(),
    username: Joi.string().min(3),
    email: Joi.string().email().min(8),
    profile_image: Joi.string()
});

const loginValidation = Joi.object({
    email : Joi.string().email().required().min(8),
    password : Joi.string().required().min(6)
})

module.exports = {
    createValidation,
    updateValidation,
    loginValidation
}