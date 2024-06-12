
// @ts-nocheck
import express from 'express'
import bodyParser from 'body-parser'
import whatsReciver from './router/whats-reciver'

const app = express()

require("dotenv").config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// router
app.use('/', whatsReciver)

app.get("/webhook",(req,res)=>{
  // let mode=req.query["hub.mode"];
  let challange=req.query["hub.challenge"];
  res.status(200).send(challange);
  // let token=req.query["hub.verify_token"];
  // console.log(process.env.API_ME)
  // console.log(token)
  // if(mode && token){

  //   if(mode === "subscribe" && token === process.env.API_ME){
  //     res.status(200).send(challange);
  //   }else{
  //       res.status(403)
  //   }
  // }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});