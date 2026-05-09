const experss = require('express')
const app = experss();
const path = require('path');


//setup parsars for form
app.use(experss.json());
app.use(experss.urlencoded({ extended: true }));

//setup public static files
app.use(experss.static(path.join(__dirname,'public')));

//setup ejs
app.set('view engine','ejs');

//home route
app.get('/',function(req,res){
    res.render('index');
})

//listing the server
app.listen(3000,function(err){
    if(err) throw err
    console.log("server is running")
}); 