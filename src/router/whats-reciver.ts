
// @ts-nocheck 
import express, { Request, Response, Router } from 'express'
import axios from 'axios'
import { messageFlow } from '../helper/message-flow'


const router: Router = express.Router();
router.use(express.json());
require("dotenv").config()


router.get('/', async (req: Request, res: Response) => {
    // return res.send(createModel('9191919191', growProgramTags[basic], 'startModel'))
    return res.send('whatsapp-webhook-proxy-to-void-pay-ngrok')
})

router.post('/webhook', async (req, res) => {
  const dados = req.body

  // console.log(JSON.stringify(dados, null, 2))
  // verifica se tem messagem
  const message = req.body.entry?.[0]?.changes[0]?.value?.messages?.[0]
  const business_phone_number_id = req.body.entry?.[0].changes?.[0].value?.metadata?.phone_number_id
  if (message !== undefined) {
    await messageFlow(dados, res)
    } else {
    if (message) {
      await axios({
        method: "POST",
        url: `https://graph.facebook.com/v18.0/${business_phone_number_id}/messages`,
        headers: {
          Authorization: `Bearer ${process.env.WA_TOKEN}`,
        },
        data: {
          messaging_product: "whatsapp",
          status: "read",
          message_id: message.id,
        },
      });
  }
    res.sendStatus(200)
  }

})

export default router