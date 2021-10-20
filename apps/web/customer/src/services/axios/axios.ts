/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios'


const axiosApi = axios.create({ baseURL: "http://3.108.18.49:7002/cyclops/server/" })

const apiRequest = (method: any, url: any, request: any): any => {
    const token = localStorage.getItem('Token')
    const headers = {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
              // bfa: '3359060008',
              // mfa: 'Linux x86_64 Asia/Calcutta',
              // 'X-Forwarded-For': '14.98.225.138',
            }
            console.log(token)
    return axiosApi({ method, url, data: request, headers })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      return Promise.resolve(err.response.data)
    })

}
export { apiRequest }
   
  
   
  

