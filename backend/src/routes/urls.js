const express = requrie('express')
const router = express.Router()

const nanoID = require('nanoid');
const urlSchema = require('../models/urlSchema');
const urlValidator = require('../functions/validateURLs');

router.post('/short', async(req,res)=>{
    //base url in our envrionment file
    const base = process.env.BASE
    // generate a random string for new and shortened URLs
    const urlID = nanoID()
    //let req.body = Object(urlOriginal)
    const {urlOriginal} = req.body;

    //Check if req.body is a valid URL against our urlValidator function
    if (urlValidator.validateUrl(urlOriginal)){

        //try and find existing URL in database, and if true, return data.
        try {
            let url = await urlSchema.findOne({urlOriginal});
            if (url){
                res.json(url);
            } 

            // if data doesnt exist then lets make a new object, containing: urlOriginal, urlShort, urlID, date. As per the Schema we created
            else {
                const urlShort = `${base}${urlID}`;
                //create new Mongo document (using the urlSchema Class) for each urlOriginal
                url = new urlSchema({
                    urlOriginal,
                    urlShort,
                    urlID,
                    date: new Date()
                })
                
                await url.save();
                res.json(url);
            }
        } catch (error) {
                console.log(err);
                res.status(500).json('Server Error')
        }
    }
    else {
        res.status(400).json('Invalid Original Url')
    }
})

