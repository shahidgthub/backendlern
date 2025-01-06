const joi =require ('joi');

signupValidation = (req,res,next)=>{
    const Schema =joi.object({
        name:joi.String().min(3).max(100).required(),
        email:joi.String().min(3).max(100).required(),
        password:joi.String().min(4).max(100).required(),
});
const error=Schema.validate(req.body);
if (error){
    return res.status(400)
    .json({message:"bad request",error})
}
next();

}

const joi =require ('joi');

signupValidation = (req,res,next)=>{
    const Schema =joi.object({
        email:joi.String().min(3).max(100).required(),
        password:joi.String().min(4).max(100).required(),
});
const error=Schema.validate(req.body);
if (error){
    return res.status(400)
    .json({message:"bad request",error})
}
next();

}
modules.exports={ 
     signupValidation,
     signupValidation

}



