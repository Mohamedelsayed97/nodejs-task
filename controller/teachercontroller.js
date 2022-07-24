

module.exports.getAllTeachers=(request,response)=>{
    console.log(request.query);
    console.log(request)
    response.status(200).json({data:"list of teachers"})
}
module.exports.getTeacherById=(request,response)=>{
    console.log(request.params)
    response.status(200).json({data:"teacher Id "+ request.params.id})
}

module.exports.createTeacher=(request,response,next)=>{

    response.status(201).json({data:"insert Teacher"})
}

module.exports.updateTeacher=(request,response)=>{
    response.status(200).json({data:"update Teacher"})
}

module.exports.deleteTeacher=(request,response)=>{
    response.status(200).json({data:"delete Teacher"})
}