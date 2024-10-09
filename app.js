const exprss = require("express")

const app = exprss()

app.use(exprss.json())
app.use(exprss.urlencoded({extended: true}))


app.get("/arru", (req, res)=>{
    res.status(200).json({
        mesage: "HD CONTENT"
    })
})



app.get("/hello", (req, res)=>{
    res.status(200).json({
        mesage: "Hello world"
    })
})

app.post("/data", (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.json({
        status: true,
       name: name,
       age: age
    })
})

app.listen(4000, ()=>{
    console.log("Server run on port:4000");
    
})