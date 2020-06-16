//require the library
const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/to_do_list_db');

//acquire the connection to check if it was establised
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'Error connecting to db'));

//connected
db.once('open', function() {
  console.log("we are connected the database");
});