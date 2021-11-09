import { apiRequest } from '../../../../../../services/axios/axios'

const updateEmployeeApi = async (
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  previousEmployer: string,
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
        employmentStatus: employeeStatus,
      },
    }
    const response = await apiRequest('PUT', 'contacts/interns/update', dataToserver)
    console.log(response)

    return response
  }
}

const updateConsultantApi = async (
  orgId: string | null,
  contactId: string,

  rate: string,
  consultantStatus: string,
  currency: string,
  serviceType: string,
  startDate: string,
  endDate: string
) => {
  const dataToserver = {
    orgId,
    contactId,
    updatedConsultant: {
      rate,
      serviceType,
      currency,
      startDate,
      endDate,
      consultantStatus,
    },
  }
  const response = await apiRequest('PUT', 'contacts/consultants/update', dataToserver)
  console.log(response)

  return response
}
const updateVendorClientApi = async (
  orgId: string | null,
  contactId: string,

  rate: string,

  currency: string,

  businessType: string,
  paymentTerms: string,
  service: string,
  unit: string,
  group: string
) => {
  if (group === 'Vendor') {
    const dataToserver = {
      orgId,
      contactId,
      updatedVendor: {
        unit,
        rate,
        businessType,
        currency,
        paymentTerms,
        service,
      },
    }
    const response = await apiRequest('PUT', 'contacts/vendors/update', dataToserver)
    console.log(response)

    return response
  }
}

export { updateEmployeeApi, updateConsultantApi, updateVendorClientApi }
