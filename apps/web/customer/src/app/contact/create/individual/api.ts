import { apiRequest } from "../../../../services/axios/axios"

const createContactApi = async(
    contactName: string,
    phoneNo: string,
  email: string,
  address: string,
  country: string,
  state: string,
  postcode: string,
  city: string,
  bankName: string,
  bankAccount: string,
  ifsc: string,
  swift: string,
  bankAddress: string,

) => {
    const dataToserver = {
        orgId:localStorage.getItem('orgId'),
        contactType: "individual",
        status: "saved",
        contactName,
        "contactPic": "jpg",
        email,
        phoneNo,
        address,
        city,
        state,
        postcode,
        country,
        bankAccount,
        bankName,
        ifsc,
        swift,
        bankAddress,
        "roles": [1,2,3]
    }
    console.log(dataToserver)
    const response = await apiRequest('POST','contacts/create',dataToserver)
    return response
}

export {createContactApi}
