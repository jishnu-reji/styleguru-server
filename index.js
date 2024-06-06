require('dotenv').config()
const express = require('express')
const cors =require('cors')
require('./DB/connection')
const router = require('./Routes/router')

const cartServer = express()
cartServer.use(cors())
cartServer.use(express.json())
cartServer.use(router)

const PORT = 3000 || process.env.PORT

cartServer.listen(PORT,()=>{
    console.log(`Style guru server started at port ${PORT}`);
})

cartServer.get('/',(req,res)=>{
    res.send(`<h1>Style guru server started and waiting for client request!!!</h1>`)
})