const { Joi, celebrate } = require('celebrate');
const validator = require('validator');

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
}

const validateClothingitem = celebrate ({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
    'string.min': 'The "name" field must have more than 1 character',
    'string.max': 'The "name" field must have less than 30 characters',
    'any.required': 'The "name" field must be filled in',
    }),
    imageUrl: Joi.string().required().custom(validateURL).messages({
  'string.empty': 'The "imageUrl" field must be filled in',
  'string.uri': 'The "imageUrl" field must be a valid url',
}),
}),
});


const validateId = celebrate({
  params: Joi.object().keys({
 itemId: Joi.string().required().hex().length(24),
  }),
});

const validateUser = celebrate ({
body: Joi.object().keys({
name: Joi.string().required().min(2).max(30).messages({
  "string.min": 'The "name" field must have more than 1 character',
  "string.max": 'The "name" field must have less than 30 characters',
  'any.required': 'The "name" field must be filled in',
}),
avatar: Joi.string().required().custom(validateURL).messages({
"string.empty": 'The "avatar" field must be filled in',
"string.uri": 'The "avatar" field must be a valid url',
   }),
email: Joi.string().required().email().messages({
 "any.required": 'The "email" field must be filled in',
}),
password: Joi.string().required().min(8).messages({
 "any.required": 'The "password" field must be filled in',
 "string.min": 'The "password" field must have more than 7 characters',
})
  }),
});

const validateLogin = celebrate ({
body: Joi.object().keys({
email: Joi.string().required().email().messages({
 "any.required": 'The "email" field must be filled in',
}),
password: Joi.string().required().min(8).messages({
 "any.required": 'The "password" field must be filled in',
 "string.min": 'The "password" field must have more than 7 characters',
})
  }),
});






module.exports = {
  validateClothingitem,
  validateUser,
  validateURL,
  validateId,
  validateLogin
};