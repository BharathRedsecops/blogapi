const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')
const app = express()
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const Blog = require('./models/Blog')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const url = "mongodb://localhost:27017/test_db"
const client =  new MongoClient(url)


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

app.get("/getBlogs", async (req, res) => {
    
    await client.connect()
    const db = client.db('test_db')
    const collection = db.collection('blogs')

    const query = {}
    const blogs = await collection.find(query).toArray()
    console.log('blogs data', blogs)

    if (blogs?.length > 0){
        res.status(200).json({
            "datax" : blogs
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
    const blogData = blogPosts[req.query.blogId]

    if (typeof blogData === 'undefined'){
        res.send(404).json({
            "data" : []
        })
    }
    res.status(201).json(blogData)
})

app.delete("/delete", async (req, res) => {
    console.log(req.query.blogId)
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


app.get('/test-db', (req, res) => {
    mongoose.connect(url, {})
    const db = mongoose.connection;
    console.log(db)
    db.close()
    db.on('error', () => {
        console.log("some error")
    })
    res.json({"data" : "connected"})

})

app.post('/signup', async (req,res) => {

    const name = req.body.name;
    const email = req.body.email;
    let password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt)

    let user = await User.findOne({email})
    if (user) {
        return res.status(302).json({
            "data" : "user already exists !"
        })
    }

    user = new User({
        name,
        email,
        password
    })
    user.save()
    return res.status(201).json({
        user: user
    })
})

app.post('/login', async (req,res) => {
    const email = req.body.email;
    let password = req.body.password

    let user = await User.findOne({email})
    if (await bcrypt.compare(password, user.password)){
        return res.status(200).json({
            data: "loggedin successfully"
        })
    }
    
    return res.status(404).json({
        data: "Invalid credentials"
    })
})

app.post('/create-blog', async (req, res) => {

    const blogTitle = req.body.blogTitle;
    const content = req.body.content;
    const img = req.body.img;
    const pdate = req.body.pdate;
    let blog = new Blog({
        blogTitle,
        content,
        img,
        pdate
    })

    blog.save()
    
    res.status(201).json({
        data : "Blog created successfully",
        blog: blog
    })
})

app.listen(5000, () => {
    console.log("hello world")
})