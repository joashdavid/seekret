/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios'


const axiosApi = axios.create({ baseURL: "https://b2-cyclops.powerofn.in/cyclops/server/" })

const apiRequest = (method: any, url: any, request: any,params:any): any => {
    const token = localStorage.getItem('Token')
    const headers = {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            }

    // if(url==='organizations/fetchOrg'){
    //   axios.get("https://b2-cyclops.powerofn.in/cyclops/server/organizations/fetchOrg",{
    //     params
    //   }).then(res => console.log(res))
    // }
    return axiosApi({ method, url, data: request, headers,params})
    .then((res) => {
      console.log(params)
      return Promise.resolve(res.data)
    })
    .catch((err) => {
      return Promise.resolve(err.response.data)
    })
}
export { apiRequest }
   
  
   
  

