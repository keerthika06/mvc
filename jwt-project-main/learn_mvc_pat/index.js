const express = require("express")
const app = express()
const userRoute = require('./routes/user')

app.use("/user",userRoute)
app.listen(3035, () => {
    console.log("server running on port 3035")
})