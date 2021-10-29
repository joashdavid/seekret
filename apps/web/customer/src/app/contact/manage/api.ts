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
  // const orgId = useSelector(state)
  // const orgId  = store.getState()
  console.log()
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
        role: ['1'],
        status: ['saved'],
        searchPattern: '%',
      },
    },
  }
  console.log(dataToserver)
  console.log('local storage', localStorage.getItem('orgId'))
  const response = await apiRequest('POST', 'contacts/manage/fetch', dataToserver)
  console.log('response api', response)
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

const getCurrentContactDetails = async (contact: ContactTableModel) => {
  const dataToserver = {
    orgId: contact.orgId,
    contactId: contact.contactId,
  }
  return await apiRequest('POST', 'contacts/fetchDetails', dataToserver)
}

export { getContactApi, sendInviteApi, deleteContactApi, getCurrentContactDetails }
