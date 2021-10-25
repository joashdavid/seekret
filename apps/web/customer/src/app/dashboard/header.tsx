import { Layout, Select } from 'antd'
import { useState, useEffect } from 'react'

import landingPageStyles from './dashboard.module.less'
import { OrgnizationModel } from './model'
import { fetchOrganizationApi } from './api'


const DashBoardHeader = () => {
  const { Header } = Layout
  const { Option } = Select
  const [selectedOrgTheme, setSelectedTheme] = useState('')
  const [orgList, setOrgList] = useState<OrgnizationModel[]>([])
  const [selectedOrg, setSelectedOrg] = useState<string>('')
  const getOrgDetails = (data: string) => {
    const getSelectedOrgData = orgList.filter((orgSelected) => orgSelected.orgId === data)
    const selectedOrg = { ...getSelectedOrgData }
    setSelectedTheme('#' + selectedOrg[0].theme)
    setSelectedOrg(selectedOrg[0].orgShortName)
  }
  const fetchOrg = async () => {
    const response = await fetchOrganizationApi()
    setOrgList(response.data)
    setSelectedOrg(response.data[0].orgShortName)
    setSelectedTheme('#' + response.data[0].theme)
  }

  useEffect(() => {
    fetchOrg()
  }, [])
  return (
    <Header style={{ backgroundColor: `${selectedOrgTheme}` }} className="header">
      <Select
      style={{ backgroundColor: `${selectedOrgTheme}`, width: 360}}
        className={landingPageStyles.dropDown}
        onChange={getOrgDetails}
        defaultValue={orgList.length>0 ? orgList[0].orgShortName:""}
        bordered={false}
        value={selectedOrg}
      >
        {orgList.map((org) => {
          return <Option value={org.orgId}>{org.orgShortName}</Option>
        })}
      </Select>
    </Header>
  )
}

export {DashBoardHeader}
