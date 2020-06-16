const express= require('Express');
const path=require('path');

const port= 7000;

const db=require('./config/mongoose');
const to_do=require('./models/to_do.js')

const app= express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.static('./assets'));

app.get('/',function(req,res){
    res.render('home',{
        title: "My To Do List"
    })
})


app.listen(port,function(err){
    if(err){
        console.log("There is an error in running the server:"+err);
        return;
    }
    console.log("My server is running up and good on port: "+port);
})