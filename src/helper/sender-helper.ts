// @ts-nocheck
import axios from 'axios'

export function sendMessage(data) {
  var config = {
    method: 'post',
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
    headers: {
      'Authorization': `Bearer ${process.env.WA_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios(config)
}

export function getTextMessageInput(recipient, text) {
    return JSON.stringify({
    "messaging_product": "whatsapp",
    "preview_url": false,
    "recipient_type": "individual",
    "to": recipient,
    "type": "text",
    "text": {
        "body": text
    }
    });
}

// module.exports = {
//   sendMessage: sendMessage,
//   getTextMessageInput: getTextMessageInput
// };