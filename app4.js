// Time For EJS Baby

const express = require("express")
const env = require("dotenv")

env.config()

const app = express()

const PORT = process.env.PORT;
app.use(express.json())
app.set("view engine", "ejs");

app.get("/home", (req, res)=>{
    const data = [
        {name:"Jatin", email:"abc"},
        {name:"Jatin", email:"abc"},
        {name:"Jatin", email:"abc"},
    ]
    // res.render("index", {name:"Jatin"})
    res.render("index", {data})
})

app.post('/data', (req, res)=>{
    const id = Date.now()
    const {name, email} = res.body

    res.send({id, name, email})
})

app.listen(PORT, ()=>{
    console.log(`Server run on http://localhost:${PORT}`)
})