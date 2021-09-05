import { Message } from '../../interfaces/utils/Message'

class MessageBusiness {
  sucess = (message: string, response?: any): Message => {
    const messageReturn: Message = {
      message: `Sucesso: ${message}`,
      status: 200,
      response: response,
    }
    console.log(messageReturn)

    return messageReturn
  }

  info = (message: string, info?: any): Message => {
    const messageReturn: Message = {
      message: `Info: ${message}`,
      status: 250,
      response: info,
    }

    return messageReturn
  }

  error = (message: string, error?: any) => {
    const messageReturn: Message = {
      message: `Error: ${message}`,
      status: 400,
      response: error,
    }

    return messageReturn
  }
}

export const messageBusiness = new MessageBusiness()
