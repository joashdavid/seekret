import { apiRequest } from '../../../../../services/axios/axios'

const updateClientApi = async(
  orgId: string|null,
  contactId: string,
  employeId: string,
  dob: string,
  gender: string,
  aadharNo: string,
  bloodGroup: string,
  pan: string,
  uanNo: string,
  emergencyContact: string,
  // emergencyContactNo: string,
  // relationship: string
) => {
  const data = {
    orgId,
    contactId,
    updatedEmployee: {
    //   employeId,
      dob,
      // gender,
      aadharNo,
      bloodGroup,
      pan,
      uanNo,
      emergencyContact,
    //   emergencyContactNo,
    //   relationship,
    },
  }
  console.log(data)
  const response =await apiRequest('PUT', 'contacts/employees/update', data)
  return response
}

const fetchClientApi = async(orgId:string|null,contactId:string) => {
  const response =await apiRequest('POST', 'contacts/employees/fetchEmployee', {orgId,contactId})
  console.log(response)
  return response
}

export { updateClientApi, fetchClientApi }
