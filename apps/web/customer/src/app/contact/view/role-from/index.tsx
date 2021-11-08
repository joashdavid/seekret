import { Tabs, Col, Space } from 'antd'
import { useEffect, useState } from 'react'

import { BankInfo } from './bank-info'
import { EmployeeMentInfo } from './employement-info'
import { MoreDetails } from './more-detail'
import { PayRollInfo } from './payroll'
import { DocumentInfo } from './document'
import { ContactModel } from '../../../../model/model'
import { fetchClientDetailApi } from './api'

const RoleForm = (props: { roles: string[] | undefined; data: ContactModel }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contactInfo, setContactInfo] = useState<any>({})
  const [currentTab, setCurrentTab] = useState<string>('')
  const { TabPane } = Tabs
  useEffect(() => {
    if (props.roles) {
      setCurrentTab(props.roles[0])
      fetchClient(props.roles[0])
    }
  }, [props])

  const fetchClient = async (group: string) => {
    if (group) {
      const response = await fetchClientDetailApi(props.data.orgId, props.data.contactId, group)
      setContactInfo(response.data)
    }
  }
  const switchTabs = async (activeKey: string) => {
    setCurrentTab(activeKey)
    await fetchClient(activeKey)
  }
  return (
    <Tabs onTabClick={switchTabs} activeKey={currentTab}>
      {props.roles?.map((role: string) => {
        return (
          <TabPane tab={role} key={role}>
            <Space>
              <BankInfo data={contactInfo} orgId={props.data.orgId} group={currentTab} />
              <Col span={1}></Col>
              <MoreDetails data={contactInfo} orgId={props.data.orgId} group={currentTab} />
              <Col span={1}></Col>

              <EmployeeMentInfo data={contactInfo} orgId={props.data.orgId} group={currentTab} />
            </Space>
            <Space>
              {(currentTab === 'Employee' ||
                currentTab === 'Intern') && (
                  <PayRollInfo data={contactInfo} orgId={props.data.orgId} group={currentTab} />
                )}

              <Col span={1}></Col>
              <DocumentInfo />
            </Space>
          </TabPane>
        )
      })}
    </Tabs>
  )
}

export { RoleForm }
