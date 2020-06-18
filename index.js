const express= require('express');
const path=require('path');

const port= 7000;

const db=require('./config/mongoose.js');
const todo=require('./models/to_do.js')

const app= express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));



app.get('/',function(req,res){
    res.render('home',{
        title: "My To Do List"
    })
})

app.post('/create-to-do', function(req,res){

    todo.create({
        Description: req.body.Description,
        Category: req.body.Category,
        Date: req.body.Date
    },function(err , new_to_do){
        if(err){
            console.log("Error in creating the contact "+ err);
            return;
        }

        console.log("*****"+new_to_do);
        return res.redirect('back');
    })
})


app.listen(port,function(err){
    if(err){
        console.log("There is an error in running the server:"+err);
        return;
    }
    console.log("My server is running up and good on port: "+port);
})