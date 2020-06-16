const express= require('Express');
const path=require('path');

const port= 7000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

const app= express();



app.listen(port,function(err){
    if(err){
        console.log("There is an error in running the server:"+err);
        return;
    }
    console.log("My server is running up and good on port: "+port);
})