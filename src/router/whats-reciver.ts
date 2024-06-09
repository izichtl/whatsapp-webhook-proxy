
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
    // console.log(response)
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao enviar os dados');
    }

    // Converte a resposta para JSON
    const responseData = await response.json();

    // Envia os dados de volta para o cliente
    res.json(responseData);
  } catch (error) {
    console.error('Erro na requisição:', error);
    res.status(500).send('Erro na requisição')
  }
});



router.post('/webhook', (req, res) => {
  const dados = req.body
  console.log('axios entry')
  console.log(dados)
  const url = `${process.env.REDIRECT_URL}/redirect`
  console.log(url)
  axios.post(url, dados).then(response => {
    console.log(response.data);
    res.status(200).send('Webhook recebida com sucesso!')
  })
  .catch(error => {
    res.status(500).send('Erro ao enviar os dados para a outra rota!');
  });
  });


export default router