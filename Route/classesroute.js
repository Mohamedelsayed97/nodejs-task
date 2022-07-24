const express=require("express");
const controller=require("./../Controller/classescontroller")
const {body,param,query}=require("express-validator");
const inputValidationMw=require("./../middelware/inputvalidation")
const router=express.Router();


/**  body-parser */
/*  body-parser.json()  ===express.json()
    
*/


router.route("/classes")
      .get(controller.getAllClasses)
      .post([
                body("id").isInt().withMessage("classes Id should be integer"),
                body("name").isAlpha().withMessage("classes name should be string ")
                            .isLength({min:5}).withMessage("teacher >3 charchters"),
                body("age").isInt().withMessage("classes age must be number")

            ]
        ,inputValidationMw
        ,controller.createClasses)
      .put(controller.updateClasses)

                                                        
    router.route("/classes/:id")
         .get([
            // param("id")
            param("id").isInt().withMessage("classes Id should be integer")
         ],inputValidationMw,controller.getClassesById)
         .delete([
            // param("id")
            param("id").isInt().withMessage("classes Id should be integer")
         ],inputValidationMw,controller.deleteClasses);


         router.route("/classes/:id/supervisor")
         .get([
            // param("id")
            param("id").isInt().withMessage("classes Id should be integer"),
         ],inputValidationMw,controller.getSubervisor)

         router.route("/classes/:id/childern")
         .get([
            // param("id")
            param("id").isInt().withMessage("classes Id should be integer"),
         ],inputValidationMw,controller.getChildern)

module.exports=router;