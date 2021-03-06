import { Layout, Select } from 'antd'
import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'

import landingPageStyles from './dashboard.module.less'
import { OrgnizationModel } from './model'
import { fetchOrganizationApi } from './api'
import { store } from '../store'

const DashBoardHeader = () => {
  const { Header } = Layout
  const { Option } = Select
  const [selectedOrgTheme, setSelectedTheme] = useState('')
  const [orgList, setOrgList] = useState<OrgnizationModel[]>([])
  const [selectedOrg, setSelectedOrg] = useState<string>('')
  // const [isDefault, setIsDefault] = useState<boolean>(false)

  useEffect(() => {
    fetchOrg()
  }, [])

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
    let isDefault = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let defaultOrg: any = {}
    for (const index in response.data) {
      if (response.data[index].isDefault) {
        isDefault = true
        defaultOrg = response.data[index]
        break
      } else {
        isDefault = false
      }
    }
    if (isDefault) {
      setOrganization(
        defaultOrg.orgShortName,
        defaultOrg.hexcodeStart,
        defaultOrg.hexcodeEnd,
        defaultOrg.orgId
      )
    } else {
      setOrganization(
        response.data[0].orgShortName,
        response.data[0].hexcodeStart,
        response.data[0].hexcodeEnd,
        response.data[0].orgId
      )
    }
  }

  const setOrganization = (
    shortName: string,
    hexcodeStart: string,
    hexcodeEnd: string,
    orgId: string
  ) => {
    console.log(orgId)
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

  return (
    <Header style={{ background: `${selectedOrgTheme}` }} className="header">
      <Select
        style={{
          width: 360,
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
