const express = require('express');
const app = express();
const userModel = require('./usermodel')


app.get('/', function (req, res) {
    res.send('hii')
})

//create user
app.get('/create', async function (req, res) {
    let createdUser = await userModel.create({
        name: "Rohit",
        username: "seth",
        email: 'Rohit@gmail.com'
    })
    res.send(createdUser)
})

//read one user
app.get('/read', async function (req, res) {
    let readData = await userModel.findOne({'username':'Manu'})
    res.send(readData)
})

//read all user
app.get('/readAll', async function (req, res) {
    let readAll = await userModel.find()
    res.send(readAll)
})

//update user
app.get('/update',async function(req,res) {
    let updatedUser = await userModel.findOneAndUpdate({name:'Rohit'},{username : "Rohit Saini"},{new : true})
    res.send(updatedUser);
})

//delete user
app.get('/delete',async function(req,res){
    let user = await userModel.findOneAndDelete({name:"Rohit"});
    res.send(user);
})
app.listen(3000)
