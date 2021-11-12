import { Layout, Select } from 'antd'
import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'

import landingPageStyles from './dashboard.module.less'
import { OrgnizationModel } from './model'
import { fetchOrganizationApi } from './api'
import { store } from '../store'

import HamburgerMenu from './components/HamburgerMenu'


const DashBoardHeader = () => {
  const { Header } = Layout
  const { Option } = Select
  const [selectedOrgTheme, setSelectedTheme] = useState('')
  const [orgList, setOrgList] = useState<OrgnizationModel[]>([])
  const [selectedOrg, setSelectedOrg] = useState<string>('')

  const getOrgDetails = (data: string) => {
    const getSelectedOrgData = orgList.filter((orgSelected) => orgSelected.orgId === data)
    const selectedOrg = { ...getSelectedOrgData }
    setOrganization(
      selectedOrg[0].orgShortName,
      selectedOrg[0].hexcodeStart,
      selectedOrg[0].hexcodeEnd,
      selectedOrg[0].orgId
    )
  }
  
  const fetchOrg = async () => {
    const response = await fetchOrganizationApi()
    setOrgList(response.data)
    for (const index in response.data) {
      if (response.data[index].isDefault) {
        setOrganization(
          response.data[index].orgShortName,
          response.data[index].hexcodeStart,
          response.data[index].hexcodeEnd,
          response.data[index].orgId
        )
        console.log(response.data[index])
        return
      }
      else{
        setOrganization(
          response.data[index].orgShortName,
          response.data[index].hexcodeStart,
          response.data[index].hexcodeEnd,
          response.data[index].orgId
        )
      }
    }
  }

  const setOrganization = (
    shortName: string,
    hexcodeStart: string,
    hexcodeEnd: string,
    orgId: string
  ) => {
    setSelectedOrg(shortName)
    localStorage.setItem('orgId', orgId)
    setSelectedTheme(
      `transparent linear-gradient(90deg,
             #${hexcodeEnd} 0%, #${hexcodeStart}
             100%) 0% 0% no-repeat padding-box`
    )
    store.dispatch({ type: 'SWITCH_ORG', payload: orgId })
    return
  }

  const fetchUpdatedOrgList = async () => {
    const response = await fetchOrganizationApi()
    setOrgList(response.data)
  }

  useEffect(() => {
    fetchOrg()
  }, [])

  return (
    <Header style={{ background: `${selectedOrgTheme}` }} className="header">
      <HamburgerMenu />
      <Select
        style={{
          width: 360,left: 45,
        }}
        className={landingPageStyles.dropDown}
        onChange={getOrgDetails}
        bordered={false}
        menuItemSelectedIcon={<ReactSVG src={'../../assets/checked.svg'} />}
        value={selectedOrg}
        suffixIcon={<ReactSVG src={'../../../assets/arrow-down.svg'} />}
        onDropdownVisibleChange={fetchUpdatedOrgList}
      >
        {orgList.map((org) => {
          return (
            <Option value={org.orgId} key={org.orgId} className={landingPageStyles.options}>
              <div className={landingPageStyles.optionWrapper}>
                <div
                  className={landingPageStyles.optionsLogo}
                  style={{
                    background: `transparent linear-gradient(90deg, #${org.hexcodeEnd} 0%, 
                       #${org.hexcodeStart} 100%) 0% 0% no-repeat padding-box`,
                  }}
                />
                <span> {org.orgShortName}</span>
              </div>
            </Option>
          )
        })}
      </Select>
    </Header>
  )
}

export { DashBoardHeader }
