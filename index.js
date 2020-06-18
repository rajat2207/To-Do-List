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
    todo.find({},function(err, todolist){
        if(err){
            console.log("Error in fetching the data");
            return;
        }

        return res.render('home',{
            'title': 'My To Do List',
            'list': todolist
        })
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


app.get('/delete-todo/',function(req,res){
    let id =req.query.id;

    todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting the data");
            return;
        }

        return res.redirect('back');
    });
})

app.listen(port,function(err){
    if(err){
        console.log("There is an error in running the server:"+err);
        return;
    }
    console.log("My server is running up and good on port: "+port);
})