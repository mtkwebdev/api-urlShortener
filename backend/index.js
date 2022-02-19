require('dotenv').config()
const express = require('express');
const app = express();

const defaultPort = process.env.BASE || 5000

app.listen(()=>{
    console.log(`Server is running on ${defaultPort}`)
})

