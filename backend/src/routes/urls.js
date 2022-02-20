const express = requrie('express')
const router = express.Router()

const nanoID = require('nanoid');
const urlSchema = require('../models/urlSchema');
const urlValidator = require('../functions/validateURLs');

router.post('/short', async(req,res)=>{
    
})