const PORT=8000;
const express=require('express');
const cors=require('cors');
const axios=require('axios');
require('dotenv').config()
const app=express()

app.get('/', (req, res)=>{
    res.json('hi')
})
app.get('/movies', (req, res)=>{
    res.json('hi')
})

app.listen(PORT,()=>console.log('port is live'))