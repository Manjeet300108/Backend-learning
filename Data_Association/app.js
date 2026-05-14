const express = require('express')
const app = express();

//models
const userModel = require('./models/user')
const postModel = require('./models/post');
const post = require('./models/post');


app.get('/', function (req, res) {
    res.send('hello');
})

app.get('/create', async function (req, res) {
    let user = await userModel.create({
        username: "Manu",
        email: "manu@gmail.com",
        age: 22,
    })
    res.send(user)
    
})

app.get('/create/post', async function (req, res) {
    let post = await postModel.create({
        postData : "Hello how are u!!",
        user : "6a05a9504236ab13dadb241e"
    })

    let user = await userModel.findOne({_id:"6a05a9504236ab13dadb241e"})
    user.posts.push(post._id)
    await user.save();
    res.send({post,user})
})

app.listen(3000)






