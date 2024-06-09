
// @ts-nocheck
import express from 'express'
import bodyParser from 'body-parser'
import testRouter from './router/base-router'
import whatsReciver from './router/whats-reciver'

const app = express()

require("dotenv").config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// router
app.use('/', whatsReciver)

// app.post("/webhook",(req,res)=>{
//   res.redirect('https://3140-2804-14d-1685-a1e3-7deb-aafe-859a-406d.ngrok-free.app/t')

//   let mode=req.query["hub.mode"];
//   let challange=req.query["hub.challenge"];
//   let token=req.query["hub.verify_token"];
//   console.log('@@@@@@@@@@')

//    if(mode && token){

//        if(mode==="subscribe" && token==='ivan'){
//            res.status(200).send(challange);
//        }else{
//            res.status(403);
//        }

//    }

// });


// to test only
app.use('/test', testRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});