import { Tabs, Col, Space } from 'antd'
import { BankInfo } from './bank-info'
import { EmployeeMentInfo } from './employement-info'
import { MoreDetails } from './more-details'
import { PayRollInfo } from './payroll'
import { DocumentInfo } from './document'
// import styles from './view-contact.module.less'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RoleForm = (props: { roles: string[] | undefined; data: any }) => {
  const { TabPane } = Tabs
  return (
    <Tabs>
      {props.roles &&
        props.roles.map((role: string) => {
          return (
            <TabPane tab={role} key={role}>
              <Space>
                <BankInfo data={props.data}/>
                <Col span={1}></Col>
                <MoreDetails />
                <Col span={1}></Col>
                <EmployeeMentInfo />
              </Space>
              <Space>
                <PayRollInfo />
                <Col span={1}></Col>
                <DocumentInfo/>
              </Space>
            </TabPane>
          )
        })}
    </Tabs>
  )
}

export { RoleForm }
