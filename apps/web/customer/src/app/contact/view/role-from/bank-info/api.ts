import { apiRequest } from '../../../../../services/axios/axios'

const updateClientApi = async (
  orgId: string | null,
  contactId: string,
  bankName: string,
  bankAccountNo: string,
  ifsc: string,
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
      },
    }
    const response = await apiRequest('PUT', 'contacts/interns/update', dataToserver)
    console.log(response)
    return response
  }
}

export { updateClientApi }
