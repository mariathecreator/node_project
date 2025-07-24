const express =require('express')
const app= express()
const m =require('fs')

app.get('/',(req,res)=>{
    res.send("hello to the world")
    
})

app.listen(3000,()=>{
    console.log('connected to the server');
    })


