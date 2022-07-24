const {validationResult}=require("express-validator")
module.exports=(request,response,next)=>{

    let result=validationResult(request);
    // console.log(result);
    if(!result.isEmpty())
    {
        let errorMeassge=result.errors.reduce((current,error)=> current + error.msg +" ","");
        next(new Error(errorMeassge));
        // throw new Error(errorMeassge);
 
    }
    else
    next()

}