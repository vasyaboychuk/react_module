import Joi from "joi";

const carValidator=Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-Яа-яїЇ]{1,20}/).required()
        .messages({'string.pattern.base': 'тільки букви мінімум 1 символ та маскимум 20 символів'}),
    price: Joi.number().min(1).max(100000).required(),
    year:Joi.number().min(1980).max(new Date().getFullYear()).required()
})

export {carValidator};