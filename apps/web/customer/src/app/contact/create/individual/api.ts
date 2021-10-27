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
  bankAddress: string
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
    roles: [1, 2, 3],
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

  console.log(dataToserver)
  const response = await apiRequest('POST', 'contacts/create', dataToserver)
  return response
}

export { createContactApi }
