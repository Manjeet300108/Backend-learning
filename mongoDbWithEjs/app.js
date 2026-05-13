const express = require('express')
const app = express();
const path = require('path')
const userModel = require('./models/user')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//public file setup
app.use(express.static(path.join(__dirname, 'public')))

//ejs file setup
app.set('view engine', 'ejs');




app.get('/', function (req, res) {
    res.render('index')
})
//read user
app.get('/read', async function (req, res) {
    let users = await userModel.find();
    res.render('read',{users})
})
//create users
app.post('/create', async function (req, res) {
    let { name, email, image } = req.body;

    let createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')
})

app.get('/delete/:id',async function(req,res){
    let user = await userModel.findOneAndDelete({_id:req.params.id});
    res.redirect('/read')
})


app.get('/edit/:id',async function(req,res){
    let user = await userModel.findOne({_id:req.params.id});
    res.render('edit',{user})
})

app.post('/update/:id',async function(req,res){
    let {name,email,image} = req.body
    let user = await userModel.findOneAndUpdate({_id:req.params.id},{name,email,image},{new:true})
    res.redirect('/read')
})


app.listen(3000)