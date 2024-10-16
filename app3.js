// to send json data

const express = require("express")
const env = require("dotenv")
env.config()
const app = express()
const PORT = process.env.PORT;
app.use(express.json)

app.post("/data1", (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    //const {name, email} = req.body;
    res.send(name, email)
})

// For unique idb everytime we call post method
app.post(`/data2`, (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const id = Date.now();
    //const {name, email} = req.body;
    res.send(name, email, id)
})

app.listen(PORT, ()=>{
    console.log(`Server run on http://localhost:${PORT}`)
})