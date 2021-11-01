import { apiRequest } from '../../../services/axios/axios'
const createOrganizationApi = async (orgName: string, shortName: string, theme: string) => {
  const dataToserver = {
    orgName: orgName,
    orgShortName: shortName,
    theme,
  }
  console.log(dataToserver)
  const response = await apiRequest('POST', 'organizations/create', dataToserver)
  return response
}

const getThemeApi = async () => {
  return await apiRequest('GET', 'organizations/fetchThemes', '')
}

const updateOrganizationApi = async (
  id: string,
  orgName: string,
  logo: string,
  shortName: string,
  theme: string
) => {
  const dataToserver = {
    orgId: id,
    updatedOrg: {
      orgName: orgName,
      orgShortName: shortName,
      theme,
      logo,
    },
  }
  console.log('dataToserver', dataToserver)
  return await apiRequest('PUT', 'organizations/update', dataToserver)
}

export { createOrganizationApi, getThemeApi, updateOrganizationApi }
