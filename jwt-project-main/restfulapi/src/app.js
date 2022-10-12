const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.post("/students",(req,res)=>{
    res.send("hello from the other side")
})
//app.listen(3000) if not this then line number 3
app.listen(port,() =>{
    console.log(`connection is setup at ${port}`)
})