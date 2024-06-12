import axios from 'axios'

export function storageData(data: any) {
    const config = {
      method: 'post',
      url: `${process.env.STORAGE_URL}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }
    return axios(config)
  }