
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
  
});



router.post('/webhook', async (req, res) => {
  const dados = req.body
  console.log('axios entry')
  console.log(dados)
  console.log(req.body)

});


export default router