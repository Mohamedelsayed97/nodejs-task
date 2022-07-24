const express=require("express");
const controller=require("./../Controller/teachercontroller")
const {body,param,query}=require("express-validator");
const inputValidationMw=require("./../middelware/inputvalidation")
const router=express.Router();


/**  body-parser */
/*  body-parser.json()  ===express.json()
    
*/


router.route("/teachers")
      .get(controller.getAllTeachers)
      .post([
                body("id").isInt().withMessage("teacher Id should be integer"),
                body("name").isAlpha().withMessage("teacher name should be string ")
                            .isLength({min:5}).withMessage("teacher >3 charchters"),
                body("age").isInt().withMessage("Teacher age must be number")

            ]
        ,inputValidationMw
        ,controller.createTeacher)
      .put(controller.updateTeacher)

                                                        
    router.route("/teachers/:id")
         .get([
            // param("id")
            param("id").isInt().withMessage("teacher Id should be integer"),
         ],controller.getTeacherById)
         .delete([
            // param("id")
            param("id").isInt().withMessage("teacher Id should be integer"),
         ],controller.deleteTeacher);


module.exports=router;