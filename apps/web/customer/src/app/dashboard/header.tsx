import { Layout, Select } from 'antd'
import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'

import landingPageStyles from './dashboard.module.less'
import { OrgnizationModel } from './model'
import { fetchOrganizationApi } from './api'
// import * as actions from '../store/action'
import { store } from '../store'

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
      // eslint-disable-next-line max-len
      `transparent linear-gradient(90deg, #${selectedOrg[0].hexcodeEnd} 0%,  #${selectedOrg[0].hexcodeStart} 100%) 0% 0% no-repeat padding-box`
    )
    setSelectedOrg(selectedOrg[0].orgShortName)
    localStorage.setItem('orgId', selectedOrg[0].orgId)

    store.dispatch({ type: 'SWITCH_ORG', payload: selectedOrg[0].orgId })
  }

  const fetchOrg = async () => {
    const response = await fetchOrganizationApi()
    setOrgList(response.data)
    setSelectedOrg(response.data[0].orgShortName)
    localStorage.setItem('orgId', response.data[0].orgId)
    setSelectedTheme(
      `transparent linear-gradient(90deg,
         #${response.data[0].hexcodeEnd} 0%, #${response.data[0].hexcodeStart} 
         100%) 0% 0% no-repeat padding-box`
    )
    console.log("header",response.data)
    store.dispatch({ type: 'SWITCH_ORG', payload: response.data[0].orgId })
  }

  const fetchUpdatedOrgList = async () => {
    const response = await fetchOrganizationApi()
    setOrgList(response.data)
    console.log("updated")
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
        onDropdownVisibleChange={fetchUpdatedOrgList}
      
      >
        {orgList.map((org) => {
          return (
            <Option
              value={org.orgId}
              className={landingPageStyles.options}
            >
              <div className={landingPageStyles.optionWrapper}>
                <div
                  className={landingPageStyles.optionsLogo}
                  // eslint-disable-next-line max-len
                  style={{ background: `transparent linear-gradient(90deg, #${org.hexcodeEnd} 0%,  #${org.hexcodeStart} 100%) 0% 0% no-repeat padding-box`}}
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
