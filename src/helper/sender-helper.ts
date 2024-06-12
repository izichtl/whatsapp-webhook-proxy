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

export function getTemplatedMessageInput(recipient, name, template_name) {
  // console.log('getTemplatedMessageInput')
  if (template_name === 'start_crescer') {
    return JSON.stringify({
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": recipient,
      "type": "template",
      "template": {
        "namespace": "874dcf97_9a72_491d_b2a5_6887b51a3ae5",
        "name": "start_crescer",
        "language": {
          "code": "pt_BR"
        },
        "components": [
        {
          "type": "header",
          "parameters": [
            {
              "type": "text",
              "text": name
            }
          ]
        },
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": 'CRESCER'
            },
            {
              "type": "text",
              "text": 'SICRED'
            },

          ]
        },
      {
        "type": "button",
        "sub_type": "quick_reply",
        "index": "0",
        "parameters": [
          {
            "type": "payload",
            "payload": "accepted_crescer"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "quick_reply",
        "index": "1",
        "parameters": [
          {
            "type": "payload",
            "payload": "not_accepted_crescer"
          }
        ]
      }
        ]
      }
    })
  }
  if (template_name === 'pic_a_theme') {
    return JSON.stringify({
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": recipient,
      "type": "template",
      "template": {
        "namespace": "874dcf97_9a72_491d_b2a5_6887b51a3ae5",
        "name": "pic_a_theme",
        "language": {
          "code": "pt_BR"
        },
        "components": [
        { 
          "type": "button", 
          "sub_type": "flow", 
          "index": 0, 
          "parameters": [ 
            { 
              "type": "text", 
              "text": "ANSWER NOW"
            } 
          ]
        }
        ]
      }
    })
  }
}

export function getTemplatedMessageInputFlow(recipient, flow_id) {
  if (flow_id === '972419024603961'){
    return JSON.stringify({
      messaging_product: "whatsapp",
      to: recipient,
      type: "interactive",
      interactive: {
        type: "flow",
        header: {
          type: "text",
          text: "Olá 👋",
        },
        body: {
          text: "Ficamos felizes que você decidiu aprender sobre o cooperativismo, este é o modulo incial onde os conceitos básicos sobre o cooperativismo e a SICRED serão apresentados!",
        },
        action: {
          name: "flow",
          parameters: {
            flow_id: '972419024603961',
            flow_message_version: "3",
            // replace flow_token with a unique identifier for this flow message to track it in your endpoint & webhook
            flow_token: "FLOW_TOKEN_PLACEHOLDER",
            flow_cta: "Vamos começar",
            "flow_action_payload": {
                  "screen": "screen_dpundb",
                  "data": {
                    "product_name": "test",
                    "product_description": "test",
                    "product_price": 1
                  }
                }
            // uncomment to send a draft flow before publishing
            // mode: "draft",
          },
        },
      },
    }
  )
  }
  // if (flow_id === '2664511340375583'){
  //   return JSON.stringify({
  //     messaging_product: "whatsapp",
  //     to: recipient,
  //     type: "interactive",
  //     interactive: {
  //       type: "flow",
  //       header: {
  //         type: "text",
  //         text: "Vamos escolher seu assunto👋",
  //       },
  //       body: {
  //         text: "Ficamos felizes que você decidiu aprender sobre o cooperativismo, este é o modulo incial onde os conceitos básicos sobre o cooperativismo e a SICRED serão apresentados",
  //       },
  //       footer: {
  //         text: "Vamos começar",
  //       },
  //       action: {
  //         name: "flow",
  //         parameters: {
  //           flow_id: '2664511340375583',
  //           flow_message_version: "3",
  //           // replace flow_token with a unique identifier for this flow message to track it in your endpoint & webhook
  //           flow_token: "FLOW_TOKEN_PLACEHOLDER",
  //           flow_cta: "Book an appointment",
  //           "flow_action_payload": {
  //                 "screen": "screen_dpundb",
  //                 "data": {
  //                   "product_name": "test",
  //                   "product_description": "test",
  //                   "product_price": 1
  //                 }
  //               }
  //           // uncomment to send a draft flow before publishing
  //           // mode: "draft",
  //         },
  //       },
  //     },
  //   }
  // )
  // }
  // return JSON.stringify({
  //     messaging_product: "whatsapp",
  //     to: recipient,
  //     type: "interactive",
  //     interactive: {
  //       type: "flow",
  //       header: {
  //         type: "text",
  //         text: "Hello there 👋",
  //       },
  //       body: {
  //         text: "Ready to transform your space? Schedule a personalized consultation with our expert team!",
  //       },
  //       footer: {
  //         text: "Click the button below to proceed",
  //       },
  //       action: {
  //         name: "flow",
  //         parameters: {
  //           flow_id: '960022182490965',
  //           flow_message_version: "3",
  //           // replace flow_token with a unique identifier for this flow message to track it in your endpoint & webhook
  //           flow_token: "FLOW_TOKEN_PLACEHOLDER",
  //           flow_cta: "Book an appointment",
  //           "flow_action_payload": {
  //                 "screen": "screen_dpundb",
  //                 "data": {
  //                   "product_name": "test",
  //                   "product_description": "test",
  //                   "product_price": 1
  //                 }
  //               }
  //           // uncomment to send a draft flow before publishing
  //           // mode: "draft",
  //         },
  //       },
  //     },
  //   }
  // )
}

