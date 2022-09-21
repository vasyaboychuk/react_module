import Joi from "joi";

const userValidator = Joi.object({
    id: Joi.number().min(1).max(1000000).required(),
    name: Joi.string().regex(/^[a-zA-Zа-яА-Я]{1,10}$/).required()
        .messages({'string.pattern.base':'неправильно введена інформація'}),
    username: Joi.string().regex(/^[a-zA-Zа-яА-Я]{1,10}$/).required(),
    email: Joi.string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).required()
        .messages({'string.pattern.base':'неправильний email'}),

});
export {userValidator};