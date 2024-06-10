// @ts-nocheck
import axios from 'axios'
require("dotenv").config()

export function redirectMessage(data) {
    var config = {
      method: 'post',
      url: `${process.env.REDIRECT_URL}/redirect`,
      headers: {
        // 'Authorization': `Bearer ${process.env.WA_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    };
  
    return axios(config)
  }