const express = require('express')
const app = express();


//?Middleware
app.use(function(req,res,next){
    console.log('Middleware')
    next();
})

//?routes

app.get('/',function(req,res){
    res.send('hello world');
})

app.get('/profile',function(req,res,next){
    return next(new Error('something went wrong'))
})

//?error handle

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send("something went wrong please try again")
})

app.listen(5000,function(err){
    if(err) throw err;
    console.log('server is running')
})

