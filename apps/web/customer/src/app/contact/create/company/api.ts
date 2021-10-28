import { apiRequest } from '../../../../services/axios/axios'

const createCompanyContactApi = async(
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
    bankAddress: string
  ) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const companydataToserver : any= {
      orgId:localStorage.getItem('orgId'),
      contactType: 'company',
      status: 'saved',
      contactName,
      contactPic: 'jpg',
      email,
      phoneNo,
      // roles: [1, 2, 3],
    }
    if (address) {
      companydataToserver.address = address
    }
    if (country) {
      companydataToserver.country = country
    }
    if (state) {
      companydataToserver.state = state
    }
    if (postcode) {
      companydataToserver.postcode = postcode
    }
    if (city) {
      companydataToserver.city = city
    }
    if (bankName) {
      companydataToserver.bankName = bankName
    }
    if (bankAddress) {
      companydataToserver.bankAddress = bankAddress
    }
    if (bankAccount) {
      companydataToserver.bankAccount = bankAccount
    }
    if (ifsc) {
      companydataToserver.ifsc = ifsc
    }
    if (swift) {
      companydataToserver.swift = swift
    }
      
      console.log(companydataToserver)
      const response = await apiRequest('POST','contacts/create',companydataToserver)
      console.log("zxczxc",response.success)
      return response
  }

  export {  createCompanyContactApi }
