
// @ts-nocheck 
import express, { Request, Response, Router } from 'express';
import { whatsAppSenderMessage } from '../helper/whats-sender';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
const a = uuidv4()
const router: Router = express.Router();
router.use(express.json());
require("dotenv").config()


router.get('/', async (req: Request, res: Response) => {
    return res.send('whatsapp-webhook-proxy-to-void-pay-ngrok')
})

router.post('/t', (req, res) => {
  console.log('ttttttttttttttt')
  console.log(req.body)
  if(true) {
    whatsAppSenderMessage("5521982608223", a, "107368482457800")
    res.status(200).send('Webhook recebida com sucesso!2')
  }
});

router.post('/webhook', (req, res) => {
  const dados = req.body
  console.log('axios entry')
  axios.post(`${process.env.REDIRECT_URL}/t`, dados)
  console.log('axios out')
  res.status(200).send('Webhook recebida com sucesso!')
  });


export default router