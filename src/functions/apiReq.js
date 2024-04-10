import axios from "axios";

export const axiosReq = async ({ url, data, method = 'GET' }) => {
    console.log('apiReq 🍈 \n', { url, data, method })
 
    try {
       const { data: result } = await axios({
          // TODO - from .env
          baseURL: 'http://localhost:2500/',
          url,
          data,
          method,
          headers: {
             Authorization: localStorage.token || ''
          }
       })
 
       console.log('apiReq result 🐱 \n', result)
 
       return result
    } catch (error) {
       // TODO
       console.log('apiReq error 🤢 \n', error)
       throw error
    }
 }
 