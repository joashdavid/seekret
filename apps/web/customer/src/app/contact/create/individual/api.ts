import { apiRequest } from '../../../../services/axios/axios'

const createContactApi = async (
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
  groups: number[]
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataToserver: any = {
    orgId: localStorage.getItem('orgId'),
    contactType: 'individual',
    status: 'saved',
    contactName,
    contactPic: 'jpg',
    email,
    phoneNo,
    // groups:[]
  }
  if (address) {
    dataToserver.address = address
  }
  if (country) {
    dataToserver.country = country
  }
  if (state) {
    dataToserver.state = state
  }
  if (postcode) {
    dataToserver.postcode = postcode
  }
  if (city) {
    dataToserver.city = city
  }
  if (bankName) {
    dataToserver.bankName = bankName
  }
  if (bankAddress) {
    dataToserver.bankAddress = bankAddress
  }
  if (bankAccount) {
    dataToserver.bankAccount = bankAccount
  }
  if (ifsc) {
    dataToserver.ifsc = ifsc
  }
  if (swift) {
    dataToserver.swift = swift
  }
  if(groups.length > 0){
    dataToserver.groups = groups
  }
  const response = await apiRequest('POST', 'contacts/create', dataToserver)
  return response
}

const createCompanyContactApi = async (
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
  const companydataToserver: any = {
    orgId: localStorage.getItem('orgId'),
    contactType: 'company',
    status: 'saved',
    contactName,
    contactPic: 'jpg',
    email,
    phoneNo,

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

  const response = await apiRequest('POST', 'contacts/create', companydataToserver)
  return response
}

const updateContactApi = async (
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
  contactId: string,
  groups:number[]
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataToserver: any = {
    orgId: localStorage.getItem('orgId'),
    contactId,
    updatedContact: {
      status: 'saved',
      contactName,
      contactPic: 'jpg',
      email,
      phoneNo,
      groups: [],
      
    },
  }
  if (address) {
    dataToserver.updatedContact.address = address
  }
  if (country) {
    dataToserver.updatedContact.country = country
  }
  if (state) {
    dataToserver.updatedContact.state = state
  }
  if (postcode) {
    dataToserver.updatedContact.postcode = postcode
  }
  if (city) {
    dataToserver.updatedContact.city = city
  }
  if (bankName) {
    dataToserver.updatedContact.bankName = bankName
  }
  if (bankAddress) {
    dataToserver.updatedContact.bankAddress = bankAddress
  }
  if (bankAccount) {
    dataToserver.updatedContact.bankAccount = bankAccount
  }
  if (ifsc) {
    dataToserver.updatedContact.ifsc = ifsc
  }
  if (swift) {
    dataToserver.updatedContact.swift = swift
  }
  if(groups.length>0){
    dataToserver.updatedContact.groups = groups
  }
  
  // console.log(dataToserver)
  const response = await apiRequest('PUT', 'contacts/update', dataToserver)
  // console.log(response)
  return response
}

export { createContactApi, createCompanyContactApi, updateContactApi }
