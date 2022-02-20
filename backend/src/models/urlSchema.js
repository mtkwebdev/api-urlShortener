const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    urlID:{
        type:String,
        required:true
    },
    urlOriginal:{
        type:String,
        required:true
    },
    urlShort:{
        type:String,
        required:true
    },
    urlClicks:{
        type:Number,
        required:true,
        default:0
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports = mongoose.model('urlSchema', URLSchema)