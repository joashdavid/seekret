import { apiRequest } from '../../../services/axios/axios'
import { ContactTableModel } from '../model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getContactApi = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orgId: any,
  column: string,
  pgNo: number,
  limit: number,
  order: string
) => {
  const dataToserver = {
    orgId: orgId.orgId,
    options: {
      sort: {
        column: column,
        order: order,
      },
      pagination: {
        pgNo: pgNo,
        limit: limit,
      },
      filters: {
        contactType: ['individual'],
        group: ['1'],
        status: ['saved'],
        searchPattern: '%',
      },
    },
  }
  const response = await apiRequest('POST', 'contacts/manage/fetch', dataToserver)
  return response
}

const sendInviteApi = async (contact: ContactTableModel) => {
  const dataToserver = {
    orgId: contact.orgId,
    contactId: contact.contactId,
  }
  console.log(dataToserver)
  return await apiRequest('POST', 'contacts/invite', dataToserver)
}

const deleteContactApi = async (contact: ContactTableModel) => {
  const dataToserver = {
    orgId: contact.orgId,
    contactIds: [contact.contactId],
  }
  return await apiRequest('DELETE', 'contacts/delete', dataToserver)
}

const archiveContactApi  = async(contact:ContactTableModel) => {
  const dataToserver = {
    orgId: contact.orgId,
    contactIds: [contact.contactId],
  }
  return await apiRequest('PATCH', 'contacts/archive', dataToserver)
}

const getCurrentContactDetails = async (contact: ContactTableModel) => {
  const dataToserver = {
    orgId: contact.orgId,
    contactId: contact.contactId,
  }
  return await apiRequest('POST', 'contacts/fetchDetails', dataToserver)
}

const revokeContactApi = async (contactId: string, orgId: string) => {
  return await apiRequest('PUT', 'contacts/revokeAccess', { contactId, orgId })
}

export {
  getContactApi,
  sendInviteApi,
  deleteContactApi,
  getCurrentContactDetails,
  revokeContactApi,
  archiveContactApi
}
