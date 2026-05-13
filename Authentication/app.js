const express = require('express')
const app = express();

const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

app.use(cookieParser())

//set cookies
app.get('/',function(req,res){
    res.cookie('name','manu')
    res.send('Hello')
})

//Get cookies
app.get('/read',function(req,res){
   console.log(req.cookies) 
    res.send('read page')
})

//Hash a password/Encryption
app.get('/hash',function(req,res){
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash('manjeet',salt,function(err,hash){
            res.send('done')
            console.log(hash)
        })
    })
})

//Decryption not present we compare the plain password and hash password
app.get('/decry',function(req,res){
    bcrypt.compare('manjeet','$2b$10$wFVLwW4dUcsp4B5BroDaG.YCRXkD8BdjnUPsZRQ/W5e5UIm9.jl7u',function(err,result){
        console.log(result)
    })
})

//set jwt token
app.get('/jwt',function(req,res){
    let token = jwt.sign({email:'manu@gmail.com'},'secret')
    res.cookie('token',token);
    res.send('done')
})

//get data
app.get('/jwt/read',function(req,res){
    res.send('done')
    // console.log(req.cookies.token);

    let data = jwt.verify(req.cookies.token,'secret');
    console.log(data)
})




app.listen(3000);