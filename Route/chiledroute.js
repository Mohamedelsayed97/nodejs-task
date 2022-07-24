const express=require("express");
const controller=require("./../Controller/childcomntroller")
const {body,param,query}=require("express-validator");
const inputValidationMw=require("./../middelware/inputvalidation")
const router=express.Router();


/**  body-parser */
/*  body-parser.json()  ===express.json()
    
*/


router.route("/chileds")
      .get(controller.getAllChiled)
      .post([
                body("id").isInt().withMessage("teacher Id should be integer"),
                body("name").isAlpha().withMessage("teacher name should be string ")
                            .isLength({min:5}).withMessage("teacher >3 charchters"),
                body("age").isInt().withMessage("Teacher age must be number")

            ]
        ,inputValidationMw
        ,controller.createChiled)
      .put(controller.updateChiled)

                                                        
    router.route("/chileds/:id")
         .get([
            // param("id")
            param("id").isInt().withMessage("Chileds Id should be integer"),
         ],controller.getChiledById)
         .delete([
            // param("id")
            param("id").isInt().withMessage("Chileds Id should be integer"),
         ],controller.deleteChiled);


module.exports=router;