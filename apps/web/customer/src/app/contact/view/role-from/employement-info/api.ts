import { apiRequest } from '../../../../../services/axios/axios'

const updateClientApi = async (
  orgId: string | null,
  contactId: string,
  businessUnit: string,
  department: string,
  designation: string,
  employmentType: string,
  employeeStatus: string,
  officeLocation: string,
  joiningDate: string,
  resignationDate: string,
  noticePeriod: string,
  reportingTo: string,
  group: string
) => {
  if (group === 'Employee') {
    const dataToserver = {
      orgId,
      contactId,
      updatedEmployee: {
        businessUnit,
        department,
        designation,
        employmentType,
        employeeStatus,
        // officeLocation,
        joiningDate,
        resignationDate,
        noticePeriod,
        reportingTo,
      },
    }
    console.log(dataToserver)
    const response = await apiRequest('PUT', 'contacts/employees/update', dataToserver)
    console.log(response)
    return response
  } else if (group === 'Intern') {
    const dataToserver = {
      orgId,
      contactId,
      updatedIntern: {
        businessUnit,
        department,
        designation,
        joiningDate,
        resignationDate,
        noticePeriod,
        reportingTo,
        employmentType,
        employmentStatus:employeeStatus,
      },
    }
    const response = await apiRequest('PUT', 'contacts/interns/update', dataToserver)
    console.log(response)

    return response
  }
  else if (group === 'Vendor') {
    const dataToserver = {
      orgId,
      contactId,
      updatedVendor: {
        unit:businessUnit,
        website:department,
        businessType:designation,
        vendorStatus:reportingTo,
      },
    }
    const response = await apiRequest('PUT', 'contacts/vendors/update', dataToserver)
    console.log(response)

    return response
  }
}

export { updateClientApi }
