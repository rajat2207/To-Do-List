const mongoose=require('mongoose');

const to_doSchema=mongoose.Schema({
    Description:{
        type: String,
        required: true
    },
    Category:{
        type: String,
        required:false
    },
    Date:{
        type: Date,
        required: true
    }
})

const to_do=mongoose.model('to_do',to_doSchema);

module.exports= to_do;