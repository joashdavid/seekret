import { Divider, notification } from 'antd'
import { useState, useEffect } from 'react'
import { Breadcrumb } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'

import { TextFieldNoSuffix } from '../../components/text-field-nosuffix'
import { createOrganizationApi, getThemeApi, updateOrganizationApi } from './api'
import CycButton from '../../components/cyc-button/cyc-button'
import { ThemeModel } from '../../../model/model'
import { ThemeDropDown } from '../../components/theme-dropdown'
import { OrgModel } from '../manage/model'

const CreateOrgDashboard = () => {
  const location = useLocation<OrgModel>()
  const history = useHistory()
  const [orgName, setOrgName] = useState('')
  const [shortName, setShortName] = useState('')
  const [theme, setTheme] = useState('')
  const [isEdit, setIsedit] = useState(false)
  const [orgId, setOrgId] = useState('')
  const [themeList, setThemeList] = useState<ThemeModel[]>([])
  
  useEffect(() => {
    if (location.state) {
      setOrgName(location.state.orgName)
      setShortName(location.state.orgShortName)
      setTheme(location.state.colorName)
      setIsedit(true)
      setOrgId(location.state.orgId)
    }
  }, [])

  const getOrgName = (data: string) => {
    setOrgName(data)
  }
  const getShortName = (data: string) => {
    setShortName(data)
  }
  const getTheme = (data: string) => {
    setTheme(data)
  }

  const getThemeData = async () => {
    const response = await getThemeApi()
    setThemeList(response.data)
    console.log(response)
  }

  useEffect(() => {
    getThemeData()
  }, [])
  const createOrganization = async () => {
    if (!isEdit) {
      const response = await createOrganizationApi(orgName, shortName, theme)
      console.log(response)
      if (response.success) {
        localStorage.setItem("Token", response.data.token)
        clearForm()
        history.push('/dashboard/manageOrg')
        // props.onSave()
        return
      } else {
        return pushNotification(
          'INVALID CREDENTIALS',
          'Oops! Seems like Invalid Data!.Please enter valid information'
        )
      }
    }

    const response = await updateOrganizationApi(orgId, orgName, 'jpg', shortName, theme)
    if (response.success) {
      clearForm()
      history.push('/dashboard/manageOrg')
      return
    } else {
      return pushNotification(
        'INVALID CREDENTIALS',
        'Oops! Seems like Invalid Data!.Please enter valid information'
      )
    }
  }
  const clearForm = () => {
    setOrgName('')
    setShortName('')
    setTheme('')
  }
  const pushNotification = (message: string, description: string) => {
    notification.open({
      message: message,
      description: description,
      placement: 'bottomRight',
      duration: 3,
      className: 'notificationMessage',
    })
  }

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Add. Organization</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <div style={{ width: '38vh' }}>
        <p style={{ marginBottom: '1vh' }}>1.Fill the organization details</p>
        <TextFieldNoSuffix
          onUserInput={getOrgName}
          label="Organization name"
          name="orgName"
          type="text"
          value={orgName}
        />
        <TextFieldNoSuffix
          onUserInput={getShortName}
          label="Short name"
          name="shortName"
          type="text"
          value={shortName}
        />
        <ThemeDropDown
          label="Choose a theme"
          themeList={themeList}
          onChange={getTheme}
          value={theme}
        />
      </div>

      <CycButton value="SAVE" onClick={createOrganization} disabled={false} />
    </>
  )
}
export default CreateOrgDashboard
