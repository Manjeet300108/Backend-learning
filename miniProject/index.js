const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//setup parsar
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//setup public files
app.use(express.static(path.join(__dirname,"public")));

//setup ejs
app.set('view engine','ejs');

//home route
app.get('/',function(req,res){
    fs.readdir(`./files`,function(err,files){
        res.render('index',{files:files})
    })
});

//delete task
app.get('/delete/:filename',function(req,res){
    fs.unlink(`./files/${req.params.filename}`,function(err){
        res.redirect('/')
    })
});

//edit task title
app.get('/files/edit/:filename',function(req,res){
    res.render('edit',{filename:req.params.filename})
});

app.post('/edit',function(req,res){
    let oldpath = `./files/${req.body.oldtitle}.txt`
    let newtitle = `./files/${req.body.newtitle}`.split(' ').join('')
    if(!newtitle.endsWith('.txt')){
        newtitle+='.txt';
    }

    fs.rename(oldpath,newtitle,function(err){
        if(err) throw err;
        res.redirect('/')
    })
});

//show data
app.get('/files/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,'utf-8',function(err,data){
        if(err) throw err;
        res.render('show',{filename:req.params.filename,filedata:data})
    })
});

//write data
app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.detail,function(err){
        if(err) throw err;
        res.redirect('/')
    })
});

app.listen(3000,function(err){
    console.log("server is running")
});