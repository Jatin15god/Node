const express = require("express")
const env = require("dotenv")

env.config()
const app = express()

const PORT = process.env.PORT;

app.get("/home", (req, res)=>{
    res.send("Hello Home")
})

app.get("/hello", (req, res)=>{
    res.send("<h1>Hello Students</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server run on http://localhost:${PORT}`)
})

// const port = 4000
// app.listen(port, ()=>{
//     console.log(`Server run on http://localhost:${port}`)
// })