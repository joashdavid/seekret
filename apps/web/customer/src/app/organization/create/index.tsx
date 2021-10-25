import { Divider } from 'antd'
import { useState, useEffect } from 'react'
import { Breadcrumb, Typography } from 'antd'

import { TextFieldNoSuffix } from '../../components/text-field-nosuffix'
import { createOrganizationApi, getThemeApi } from './api'
import CycButton from '../../components/cyc-button/cyc-button'
import { ThemeModel } from '../../../model/model'
import { ThemeDropDown } from '../../components/theme-dropdown'

const CreateOrgDashboard = () => {
  const [orgName, setOrgName] = useState('')
  const [shortName, setShortName] = useState('')
  const [theme, setTheme] = useState('')
  const [themeList, setThemeList] = useState<ThemeModel[]>([])
  const { Text } = Typography

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
    const response = await createOrganizationApi(orgName, shortName, theme)
    console.log(response)
    if (response.success) {
      clearForm()
      //   props.onSave()
    }
  }
  const clearForm = () => {
    setOrgName('')
    setShortName('')
    setTheme('')
  }

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Add. Organization</Breadcrumb.Item>
      </Breadcrumb>
      <Text strong>Add Organization</Text>
      <Divider />
      <div style={{ width: '37vh' }}>
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
