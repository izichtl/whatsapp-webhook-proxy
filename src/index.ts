
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
  let mode=req.query["hub.mode"];
  let challange=req.query["hub.challenge"];
  let token=req.query["hub.verify_token"];
  if(mode && token){

    if(mode==="subscribe" && token==='ivan'){
      res.status(200).send(challange);
    }else{
        res.status(403)
    }
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});