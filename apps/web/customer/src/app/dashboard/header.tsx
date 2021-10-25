import { Layout, Divider, Select } from 'antd'
import { useState, useEffect } from 'react'

import landingPageStyles from './dashboard.module.less'
import { OrgnizationModel } from './model'
import { fetchOrganizationApi } from './api'


const DashBoardHeader = () => {
  const { Header } = Layout
  const { Option } = Select
  const [selectedOrgTheme, setSelectedTheme] = useState('')
  const [orgList, setOrgList] = useState<OrgnizationModel[]>([])
  const getOrgDetails = (data: string) => {
    const getSelectedOrgData = orgList.filter((orgSelected) => orgSelected.orgId === data)
    const selectedOrg = { ...getSelectedOrgData }
    setSelectedTheme('#' + selectedOrg[0].theme)
    console.log(selectedOrgTheme)
  }
  const fetchOrg = async () => {
    const response = await fetchOrganizationApi()
    setOrgList(response.data)
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
        bordered={false}
        dropdownRender={(menu) => (
          <div>
            <span className={landingPageStyles.optionValue}>{menu}</span>
            <Divider style={{ margin: '4px 0' }} />
          </div>
        )}
      >
        {orgList.map((org) => {
          return <Option value={org.orgId}>{org.orgShortName}</Option>
        })}
      </Select>
    </Header>
  )
}

export {DashBoardHeader}
