const express=require("express");
const teacherRouter=require("./Route/teacherroute"); 
const classesRouter=require("./Route/classesroute"); 
const chiledRouter=require("./Route/chiledroute"); 

//1- create server object for node
const server=express();
//global varibale -- global.processsssss.env.PORT

//2- listen to port number
//mmmmmmmmmmm
server.listen(process.env.PORT||8080,()=>{
    console.log("server is listening ...... 8080");
});

//firstMiddleware
//server.use(morgan('tiny'));

//*********************** END POINTS */
server.use(express.json());
server.use(teacherRouter);

server.use(classesRouter);
server.use(chiledRouter);

//Third MW  NOT FOUND
server.use((requset,response)=>{
    response.status(404).json({message:"Not FOUND"});
})
//Error MW
server.use((error,request,response,next)=>{ //js functions .length
        response.status(500).json({message:error+""});
})






// const { request, response } = require('express');
// let express = require('express');
// let server = express();
// let morgan = require('morgan');


// //Server.use(morgan('tiny'));

// server.listen( process.env.PORT||9090, () => {

//   console.log('Server listening on port :9090');

// });

// //firstMiddleware
// server.use(morgan('tiny'));
// //Server.use(morgan(':method :url :status '));


// //**************************   start point for teacher*/
// server.get("/teachers",(request,response)=>{
//     response.status(200).json({data:"list of teachers ggggggg"})
// })
// server.post("/teachers",(request,response)=>{
// response.status(200).json({data:"insert teachers"})
// })
// server.put("/teachers",(request,response)=>{
// response.status(200).json({data:"update teachers"})
// })
// server.delete("/teachers",(request,response)=>{
// response.status(200).json({data:"delete teachers"})
// })




// //**************************   start point for child*/
// server.get("/child",(request,response)=>{
//     response.status(200).json({data:"list of child"})
// })
// server.post("/child",(request,response)=>{
// response.status(200).json({data:"insert child"})
// })
// server.put("/child",(request,response)=>{
// response.status(200).json({data:"update child"})
// })
// server.delete("/child",(request,response)=>{
// response.status(200).json({data:"delete child"})
// })

// //**************************   start point for child*/
// server.get("/class",(request,response)=>{
//     response.status(200).json({data:"list of class"})
// })
// server.post("/class",(request,response)=>{
// response.status(200).json({data:"insert class"})
// })
// server.put("/class",(request,response)=>{
// response.status(200).json({data:"update class"})
// })
// server.delete("/class",(request,response)=>{
// response.status(200).json({data:"delete class"})
// })
// //Third MW  NOT FOUND
// server.use((requset,response)=>{
//     response.status(404).json({message:"Not FOUND"});
// });

// //Error meddile ware
// server.use((error,request,response,next)=>{ //js functions .length
//         response.status(500).json({message:error+""});
// });