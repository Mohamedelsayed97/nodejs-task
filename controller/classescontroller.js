

module.exports.getAllClasses=(request,response)=>{
    console.log(request.query);
    console.log(request)
    response.status(200).json({data:"list of Classes"})
}
module.exports.getClassesById=(request,response)=>{
    console.log(request.params)
    response.status(200).json({data:"Classes Id "+ request.params.id})
}

module.exports.createClasses=(request,response,next)=>{

    response.status(201).json({data:"insert Classes"})
}

module.exports.updateClasses=(request,response)=>{
    response.status(200).json({data:"update Classes"})
}

module.exports.deleteClasses=(request,response)=>{
    response.status(200).json({data:"delete Classes"})
}
module.exports.getSubervisor=(request,response)=>{
    response.status(200).json({data:"list subervisor Classes"})
}
module.exports.getChildern=(request,response)=>{
    response.status(200).json({data:"list childern Classes"})
}