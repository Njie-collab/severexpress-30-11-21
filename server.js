require("dotenv").config()
const express =require("express")
const server=express()
const port=process.env.port
server.listen(port,()=>{
    console.log(`You are Listening To Port g${port}`)
})
const item =[
    {id:1,nmae:"Jonh"},
    {id:2,nmae:"Mike"}
]
server.get("/item",(req,res)=>{res.status(200).json(item)
})
server.post("/item",(req,res)=>{res.status(201).json({id:3,name:"peter"})
})

