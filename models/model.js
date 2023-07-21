const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    tel:{
        type:String,
    },
    age:{
        type:String
    },
    country:{
        type:String
    }
},
{
    timestamps:true
}
)

const collectionSchemaRef = mongoose.model('collectionSchema',collectionSchema)

module.exports = collectionSchemaRef;