import { Tabs, Col, Space } from 'antd'
import { useEffect, useState } from 'react'

import { BankInfo } from './bank-info'
import { EmployeeMentInfo } from './employement-info'
import { MoreDetails } from './more-detail'
import { PayRollInfo } from './payroll'
import { DocumentInfo } from './document'
import { ContactModel } from '../../../../model/model'
import { fetchClientDetailsApi } from './api'

const RoleForm = (props: { roles: string[] | undefined; data: ContactModel }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contactInfo, setContactInfo] = useState<any>({})
  const { TabPane } = Tabs
  useEffect(() => {
    fetchClient()
  }, [props])

  const fetchClient = async () => {
    const response = await fetchClientDetailsApi(props.data.orgId, props.data.contactId)
    setContactInfo(response.data)
    console.log(response.data)
  }
  const switchTabs = (activeKey: string) => {
    console.log(activeKey)
  }
  return (
    <Tabs onTabClick={switchTabs}>
      {props.roles?.map((role: string) => {
        return (
          <TabPane tab={role} key={role}>
            <Space>
              <BankInfo data={contactInfo} orgId={props.data.orgId} />
              <Col span={1}></Col>
              <MoreDetails data={contactInfo} orgId={props.data.orgId}/>
              <Col span={1}></Col>
              <EmployeeMentInfo data={contactInfo} orgId={props.data.orgId} />
            </Space>
            <Space>
              <PayRollInfo data={contactInfo} orgId={props.data.orgId}/>
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
