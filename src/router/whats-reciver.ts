
// @ts-nocheck 
import express, { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { sendMessage, getTextMessageInput } from '../helper/sender-helper';
import { redirectMessage } from '../helper/redirect-helper';
const a = uuidv4()
const router: Router = express.Router();
router.use(express.json());
require("dotenv").config()


router.get('/', async (req: Request, res: Response) => {
    return res.send('whatsapp-webhook-proxy-to-void-pay-ngrok')
})





router.post('/', function(req, res, next) {
  var data = getTextMessageInput('5521982608223', 'Welcome to the Movie Ticket Demo App for Node.js!');
  console.log(data, '')
  sendMessage(data)
    .then((response) => {
      res.redirect(200, '/')
      return
    })
    .catch(function (error) {
      console.log(error)
      console.log(error.response.data)
      res.sendStatus(500)
      return;
    });
});



router.post('/webhook', async (req, res) => {
  const dados = req.body
  console.log('webhook - entry')
  console.log(dados)
  redirectMessage(req.body)
    .then((response) => {
      // res.redirect(200, '/')
      console.log('webhook - out')
      res.sendStatus(200)
      return
    })
    .catch(function (error) {
      console.log(error)
      console.log(error.response.data)
      res.sendStatus(500)
      return;
    });
});

router.post('/redirect', async (req, res) => {
  const dados = req.body
  console.log('redirect - entry')
  console.log(dados)
  console.log('redirect - out')
  res.sendStatus(200)
});


export default router