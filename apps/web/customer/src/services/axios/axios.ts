/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios'


const axiosApi = axios.create({ baseURL: "https://cyclops.powerofn.in/cyclops/server/" })

const apiRequest = (method: any, url: any, request: any): any => {
    const headers = {
              Authorization: 'Bearer ' + '',
              'Content-Type': 'application/json',
              bfa: '3359060008',
              mfa: 'Linux x86_64 Asia/Calcutta',
              'X-Forwarded-For': '14.98.225.138',
            }
    return axiosApi({ method, url, data: request, headers })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      return Promise.resolve(err.response.data)
    })

}
export { apiRequest }
   
  
   
  

