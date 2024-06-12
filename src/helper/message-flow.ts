import { createModel, growProgramTags } from "../models/base"
import { storageData } from "./data-storage"
import { getTemplatedMessageInput, getTemplatedMessageInputFlow, getTextMessageInput, sendMessage } from "./sender-helper"

export const messageFlow = async (dados: any, res: any) => {
  const from = dados.entry[0].changes[0].value.messages[0].from
  const messageType = dados?.entry?.[0]?.changes?.[0]?.value?.messages[0]?.type
  const geralMessage = dados?.entry?.[0]?.changes?.[0]?.value?.messages[0]

  if (messageType === 'interactive') {
    
    const { nfm_reply } = geralMessage.interactive
    const { response_json } = nfm_reply
    const response_json_parsed = JSON.parse(response_json)
    const { accpet_response, screen_0_Dropdown_0 } = response_json_parsed
    if(screen_0_Dropdown_0 !== undefined) {
      
      // pic_a_theme
      // need to be continued were
      storageData(createModel(from, growProgramTags['investiment'], 'startModel')).then(e => res.sendStatus(200))
      // const data = getTemplatedMessageInput(from, 'IVAN', 'pic_a_theme');
      // sendMessage(data)
      // .then((response) => {
      //   res.sendStatus(200)
      // return
      // })
      // .catch(function (error) {
      //   console.log(error)
      //   console.log(error.response.data)
      //   res.sendStatus(500)
      //   return
      // })
    }
    if(accpet_response === 'accept_program_grow') {
      
      // pic_a_theme
      storageData(createModel(from, growProgramTags['basic'], 'endModel'))
      const data = getTemplatedMessageInput(from, 'IVAN', 'pic_a_theme');
      sendMessage(data)
      .then((response) => {
        res.sendStatus(200)
      return
      })
      .catch(function (error) {
        // console.log(error)
        // console.log(error.response.data)
        res.sendStatus(500)
        return
      })
    }
    if(accpet_response === 'not_accept_program_grow') {
      storageData(createModel(from, growProgramTags['basic'], 'endModel'))
      const data = getTemplatedMessageInput(from, 'IVAN', 'pic_a_theme');
      sendMessage(data)
      .then((response) => {
        res.sendStatus(200)
      return
      })
      .catch(function (error) {
        res.sendStatus(500)
        return
      })
    }
  }
  if (messageType === 'button') {
    
    const { payload } = geralMessage.button

    if(payload === 'accepted_crescer') {
      const data = getTemplatedMessageInputFlow(from, '972419024603961')
      sendMessage(data)
      .then((response) => {
      
        storageData(createModel(from, growProgramTags['basic'], 'startModel'))
        res.sendStatus(200)
        return
      })
      .catch(function (error) {
      res.sendStatus(500)
      return;
      });
    }
    if(payload === 'not_accepted_crescer') {
      const data = getTextMessageInput(from, 'Obrigado, quando quiser começar é só falar :)');
      sendMessage(data)
        .then((response) => {
          storageData(createModel(from, growProgramTags['contact'], 'refuseModel'))
          res.sendStatus(200)
          return
        })
        .catch(function (error) {
          res.sendStatus(500)
          return;
        });
    }


  }
  if (dados?.entry?.[0]?.changes?.[0]?.value?.messages[0]?.text?.body) {
    // user-menssage
    const messages = dados.entry[0].changes[0].value.messages[0].text.body
    if (messages === '3') {
      const data = getTemplatedMessageInputFlow(from, '2664511340375583')

      sendMessage(data)
      .then((response) => {
        res.sendStatus(200)
        return
      })
      .catch(function (error) {
      res.sendStatus(500)
      return;
      });

    } 
      // messagem genérica
      storageData(createModel(from, growProgramTags['contact'], 'loginModel'))
      const data = getTemplatedMessageInput(from, 'Ivan', 'start_crescer');
      sendMessage(data)
      .then((response) => {
        res.sendStatus(200)
      return
      })
      .catch(function (error) {
        res.sendStatus(500)
        return
      })
  } 

}


