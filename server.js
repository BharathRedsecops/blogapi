const express = require('express')


const app = express()

app.get("/", async (req, res) => {
    res.json({
        "data" : ""
    })
})

app.get("/getBlogs", async (req, res) => {
    console.log(req)
    res.json({
        "data" : "hi test3"
    })
})

app.get("/blog/1", async (req, res) => {
    console.log(req)
    res.json({
        "data" : "hi test3"
    })
})

app.delete("/delete", async (req, res) => {
    console.log(req)
    res.json({
        "data" : "hi test3"
    })
})

app.post("/createBlog", async (req, res) => {
    console.log(req)
    res.json({
        "data" : "hi test3"
    })
})

app.post("/login", async (req, res) => {
    console.log(req)
    res.json({
        "data" : "login"
    })
})

app.listen(5000, () => {
    console.log("hello world")
})