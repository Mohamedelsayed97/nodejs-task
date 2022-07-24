

module.exports.getAllChiled=(request,response)=>{
    console.log(request.query);
    console.log(request)
    response.status(200).json({data:"list of Chiled"})
}
module.exports.getChiledById=(request,response)=>{
    console.log(request.params)
    response.status(200).json({data:"Chiled Id "+ request.params.id})
}

module.exports.createChiled=(request,response,next)=>{

    response.status(201).json({data:"insert Chiled"})
}

module.exports.updateChiled=(request,response)=>{
    response.status(200).json({data:"update Chiled"})
}

module.exports.deleteChiled=(request,response)=>{
    response.status(200).json({data:"delete Chiled"})
}