
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





router.post('/redirect', async (req, res) => {
  console.log(req.body)
  try {
    const wmaid = '107368482457800'
    const url = `https://graph.facebook.com/v19.0/${wmaid}/messages`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WA_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: "5521982608223",
        type: "text",
        text: {
            "body": 'resposta ao usuário',
        }
    }),
    });
    res.status(200).send('Sucesso na requisição')
  } catch (error) {
    console.error('Erro na requisição:', error);
    res.status(500).send('Erro na requisição')
  }
});



router.post('/webhook', async (req, res) => {
  const dados = req.body
  console.log('axios entry')
  console.log(dados)
  console.log(req.body)
  try {
    const wmaid = '107368482457800'
    const url = `https://graph.facebook.com/v19.0/${wmaid}/messages`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WA_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: "5521982608223",
        type: "text",
        text: {
            "body": 'resposta ao usuário',
        }
    }),
    });

    res.status(200).send('Sucesso na requisição')
  } catch (error) {
    console.error('Erro na requisição:', error);
    res.status(500).send('Erro na requisição')
  }
});


export default router