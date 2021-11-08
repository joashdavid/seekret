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
  group:string
  // emergencyContactNo: string,
  // relationship: string
) => {
  if(group === "Employee"){
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
  else if(group === "Intern"){
    const data = {
      orgId,
      contactId,
      updatedIntern: {
      //   employeId,
        dob,
        // gender,
        aadharNo,
        bloodGroup,
        pan,
        emergencyContact,
      //   emergencyContactNo,
      //   relationship,
      },
    }
    console.log(data)
    const response =await apiRequest('PUT', 'contacts/interns/update', data)
    return response
  }
 
}

const fetchClientApi = async(orgId:string|null,contactId:string) => {
  const response =await apiRequest('POST', 'contacts/employees/fetchEmployee', {orgId,contactId})
  console.log(response)
  return response
}

export { updateClientApi, fetchClientApi }
