import { Layout, Select } from 'antd'
import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'

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
    setSelectedTheme(
      `transparent linear-gradient(90deg, 
          #${selectedOrg[0].theme} 0%,  #${selectedOrg[0].theme} 100%) 0% 0% no-repeat padding-box`
    )
    setSelectedOrg(selectedOrg[0].orgShortName)
  }
  const fetchOrg = async () => {
    const response = await fetchOrganizationApi()
    console.log(response)
    setOrgList(response.data)
    setSelectedOrg(response.data[0].orgShortName)
    setSelectedTheme(
      `transparent linear-gradient(90deg,
         #${response.data[0].theme} 0%, #${response.data[0].theme} 
         100%) 0% 0% no-repeat padding-box`
    )
    console.log(selectedOrgTheme)
    // transparent linear-gradient(90deg, #315B81 0%, #003463 100%) 0% 0% no-repeat padding-box
  }

  useEffect(() => {
    fetchOrg()
  }, [])
  return (
    <Header style={{ background: `${selectedOrgTheme}` }} className="header">
      <Select
        style={{ background: `${selectedOrgTheme}`, width: 360 }}
        className={landingPageStyles.dropDown}
        onChange={getOrgDetails}
        bordered={false}
        menuItemSelectedIcon={<ReactSVG src={'../../assets/checked.svg'} />}
        value={selectedOrg}
        suffixIcon={<ReactSVG src={'../../../assets/arrow-down.svg'} />}
      >
        {orgList.map((org) => {
          return (
            <Option value={org.orgId} className={landingPageStyles.options}>
              <span>
                <img className={landingPageStyles.optionsLogo} src={org.logo} alt="" />
                {org.orgShortName}{' '}
              </span>
            </Option>
          )
        })}
      </Select>
    </Header>
  )
}

export { DashBoardHeader }
