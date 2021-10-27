/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios'


const axiosApi = axios.create({ baseURL: "https://b2-cyclops.powerofn.in/cyclops/server/" })

const apiRequest = (method: any, url: any, request: any): any => {
    const token = localStorage.getItem('Token')
    const headers = {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            }

    return axiosApi({ method, url, data: request, headers})
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      return Promise.resolve(err.response.data)
    })
}
export { apiRequest }
   
  
   
  

