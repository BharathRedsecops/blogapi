const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get("/getBlogs", async (req, res) => {
    const blogPosts = [
        {
          blogTitle: "Understanding JavaScript Closures",
          content: "Closures are a fundamental concept in JavaScript. They allow functions to access variables from an outer function's scope even after the outer function has returned...",
          pdate: "2024-08-20",
          img: "https://autogpt.net/wp-content/uploads/2023/07/Pogla_Explore_the_latest_AI_news_from_groundbreaking_drug_trial_07ab875d-1e11-42d5-89ef-39ff3d5ab451.jpg",
          url: "0"
        },
        {
          blogTitle: "An Introduction to Async/Await in JavaScript",
          content: "Async/await makes it easier to work with asynchronous code in JavaScript. It is syntactic sugar over promises, making the code look synchronous...",
          pdate: "2024-08-15",
          img: "https://coingeek.com/wp-content/uploads/2023/07/Artificial-Intelligence-2-jpg.webp",
          url: "1"
        },
        {
          blogTitle: "Exploring the Power of React Hooks",
          content: "React hooks like useState and useEffect have changed the way we build components in React. In this post, we'll explore the basic hooks and how to use them...",
          pdate: "2024-08-10",
          img: "https://miro.medium.com/v2/resize:fit:1400/1*kTRZnHMDE4Q6AITCaAEI5A.png",
          url: "2"
        }
      ];

    

    if (blogPosts.length > 0){
        res.status(200).json({
            "datax" : blogPosts
        })
    }else{
        res.status(404).json({
            "datax" : []
        })
    }
})

app.get("/", async (req, res) => {
    console.log(req)
    res.json({
        "data" : "hello, world"
    })
})

app.get("/blog", async (req, res) => {
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