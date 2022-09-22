import Joi from "joi";

const commentValidator=Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-Я]{1,10}$/).required()
        .messages({'string.pattern.base': 'неправильно введена інформація'}),
    // email: Joi.string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).required()
    //     .messages({'string.pattern.base': 'неправильний email'}),
    email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}),
    comment: Joi.string().required(),

})
export {commentValidator};