import { apiRequest } from '../../../../../services/axios/axios'

const updateClientApi = async (
  orgId: string | null,
  contactId: string,
  netSalary: string,
  ctc: string,
  insuranceProvider: string,
  insuranceNo: string,
  insuranceStatus: string,
  group: string
) => {
  if (group === 'Employee') {
    const dataToserver = {
      orgId,
      contactId,
      updatedEmployee: {
        netSalary,
        ctc,
        insuranceStatus,
        insuranceNo,
        insuranceProvider,
      },
    }
    const response = await apiRequest('PUT', 'contacts/employees/update', dataToserver)

    return response
  } else if (group === 'Intern') {
    const dataToserver = {
      orgId,
      contactId,
      updatedIntern: {
        netStipend: netSalary,
        ctc,
        insuranceStatus,
        insuranceNo,
        insuranceProvider,
      },
    }
    const response = await apiRequest('PUT', 'contacts/interns/update', dataToserver)
    console.log(response)

    return response
  }
}

export { updateClientApi }
