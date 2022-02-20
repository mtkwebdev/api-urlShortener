const express = require('express');

const router = express.Router();

const urlSchema = require('../models/urlSchema')

router.get('/:urlID', async(req,res)=>{
    try{
        const url = await urlSchema.findOne({urlID: req.params.urlID});
            if (url){
                url.clicks++
                url.save()
                return res.redirect(url.urlOriginal);
            }
            else{
                res.status(404).json('Not found')
            } 
        }
        catch (err){
            console.log(err);
            res.status(500).json('Server Error');
            }
});

module.exports = router;