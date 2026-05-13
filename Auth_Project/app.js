const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//models 

const userModel = require('./models/user');

//for forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ejs setup
app.set('view engine', 'ejs');
//public files setup
app.use(express.static(path.join(__dirname, 'public')));
//cookie setup
app.use(cookieParser());

//routes:-
//home route
app.get('/', function (req, res) {
    res.render('index')
})

//create user
app.post('/create', function (req, res) {
    let { username, email, password, age } = req.body;

    //password encryption
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })

            //jwt
            let token = jwt.sign({ email }, 'shhhhh');
            res.cookie('token', token)
            res.redirect('/');
        })
    })


})

//login user
app.get('/login', function (req, res) {
    res.render('login')
})

app.post('/login', async function (req, res) {
    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.send('Something went wrong!!!')

    //logic
    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if(result){
            let token = jwt.sign({ email : user.email }, 'shhhhh');
            res.cookie('token', token)
            res.send('you can login')
        }
    })
})


//logout user
app.get('/logout', function (req, res) {
    res.cookie('token', '')
    res.redirect('/')
})

//server
app.listen(3000)