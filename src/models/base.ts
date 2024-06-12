import { formatDateTime } from "../helper/datetime";

export interface UserModel {
  type: string;
  user_id: string;
  date: string;
  timestamp: object;
}

export const loginModel = {
    "type": "login",
		"data": "user_login",
    "user_id": '',
    "timestamp": {}
  }

export const startModel = {
    "type": "start",
		"data": "",
    "user_id": '',
    "timestamp": {}
  }

export const endModel = {
    "type": "end",
		"data": "",
    "user_id": '',
    "timestamp": {}
  }

export const refuseModel = {
    "type": "end",
		"data": "",
    "user_id": '',
    "timestamp": {}
  }

export const models: any = {
		loginModel,
		startModel,
		endModel,
    refuseModel
	}

export const growProgramTags = {
	contact: 'user_contact',
	basic: 'grow_program_basic',
	basic_plus: 'grow_program_basic_plus',
	investiment: 'grow_program_investiment',
	assembly: 'grow_program_assembly',
	not_bank: 'grow_program_notbank',
}

export function cloneModelObject<T>(obj: T): T {
  return { ...obj };
}


export const createModel = (userId: string, data: string, model: string): UserModel => {
  const dataFormatada = formatDateTime(new Date())
	const newObject = cloneModelObject(models[model])
	newObject.data = data
	newObject.user_id = userId
	newObject.timestamp = dataFormatada
  return newObject
}



	
