const Joi = require("joi")

// name : String,
// subscribers : [String],
// joined_date : Date,
// cover_image : String,
// background_image : String,
// videos : [String],
// about : String

const createValidation = Joi.object({
    name : Joi.string().required().min(3),
    subscribers : Joi.array(),
    joined_date : Joi.date().required(),
    cover_image : Joi.string().min(8),
    background_image : Joi.string().min(8),
    videos : Joi.array(),
    about : Joi.string().required().min(6)
})

const updateValidation = Joi.object({
    _id : Joi.string().required(),
    name : Joi.string().min(3),
    subscribers : Joi.array(),
    cover_image : Joi.string().min(8),
    background_image : Joi.string().min(8),
    videos : Joi.array(),
    about : Joi.string().min(6)
});

module.exports = {
    createValidation,
    updateValidation,
}