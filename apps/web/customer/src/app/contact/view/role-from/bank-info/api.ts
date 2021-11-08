import { apiRequest } from '../../../../../services/axios/axios'

const updateClientApi = async (
  orgId: string | null,
  contactId: string,
  bankName: string,
  bankAccountNo: string,
  ifsc: string,
  swift:string,
  bankBranch:string,
  group: string
) => {
  if (group === 'Employee') {
    const dataToserver = {
      orgId,
      contactId,
      updatedEmployee: {
        bankName,
        bankAccountNo,
        ifsc,
        bankBranch
      },
    }
    const response = await apiRequest('PUT', 'contacts/employees/update', dataToserver)
    console.log(response)
    return response
  } else if (group === 'Intern') {
    const dataToserver = {
      orgId,
      contactId,
      updatedIntern: {
        bankName,
        bankAccountNo,
        ifsc,
        bankBranch
      },
    }
    const response = await apiRequest('PUT', 'contacts/interns/update', dataToserver)
    console.log(response)
    return response
  }
  else if (group === 'Consultant') {
    const dataToserver = {
      orgId,
      contactId,
      updatedConsultant: {
        bankAccountName:bankName,
        bankAccountNo,
        ifsc,
        bankBranch
      },
    }
    const response = await apiRequest('PUT', 'contacts/consultants/update', dataToserver)
    console.log(response)
    return response
  }
  else if (group === 'Vendor') {
    const dataToserver = {
      orgId,
      contactId,
      updatedVendor: {
        bankName,
        bankAccountNo,
        ifsc,
        swift,
       bankAddress: bankBranch
      },
    }
    const response = await apiRequest('PUT', 'contacts/vendors/update', dataToserver)
    console.log(response)
    return response
  }
  else if (group === 'Client') {
    const dataToserver = {
      orgId,
      contactId,
      updatedClient: {
        bankName,
        bankAccountNo,
        ifsc,
        swift,
        bankAddress: bankBranch
      },
    }
    console.log(dataToserver)
    const response = await apiRequest('PUT', 'contacts/clients/update', dataToserver)
    console.log(response)
    return response
  }
}

export { updateClientApi }
