import { Breadcrumb, Col, Divider, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Tabs } from 'antd'
import styles from './view-contact.module.less'
const ROLES = [
  {
    roleId: '1',
    roleName: 'Employee',
  },
  {
    roleId: '2',
    roleName: 'Intern',
  },
  {
    roleId: '3',
    roleName: 'Consultant',
  },
  {
    roleId: '4',
    roleName: 'Vendor',
  },
  {
    roleId: '5',
    roleName: 'Client',
  },
]

const ViewContact = () => {
    const { TabPane } = Tabs
  const [roles, setRole] = useState<string[]>()
  const [roleString , setRoleString] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location = useLocation<any>()
  useEffect(() => {
    if (location.state.data.groups) {
      const roles: string[] = []
      ROLES.forEach((role) => {
          console.log(location.state.data.groups.split(','),role.roleId)
        if (location.state.data.groups.split(',').includes(role.roleId)) {
          roles.push(role.roleName)
        }
        setRole(roles)
        setRoleString(roles.toString())
      })
    }
  }, [location])

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>View. Contact</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Row>
        <Col span={2} style={{ height: '10vh' }}>
          IMAGE
        </Col>

        <Row>
          <Col span={24}>
            <Row>
              <Col span={5}>
                <p style={{ color: '#1D4B75', fontWeight: 'bold', fontSize: '1.7vh' }}>
                  {location.state.data.contactName}
                </p>
              </Col>
            </Row>
            <Row >
              <Col span={5}>
                <div>
                  <span className={styles.title}>PHONE NO:</span>
                  <p className={styles.userData}>{location.state.data.phoneNo}</p>
                </div>
              </Col>
              <Col span={5}>
                <div>
                  <span className={styles.title}>EMAIL</span>
                  <p className={styles.userData}>{location.state.data.email}</p>
                </div>
              </Col>
              <Col span={5}>
                <div>
                  <span className={styles.title}>ROLE</span>
                  <p className={styles.userData}>{roleString.length>0?roleString:"Unassigned"}</p>
                </div>
              </Col>
              <Col span={5}>
                <div>
                  <span className={styles.title}>CONTACT TYPE</span>
                  <p className={styles.userData}>{location.state.data.contactType}</p>
                </div>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <div>
                  <span className={styles.title}>ADDRESS</span>
                  <p className={styles.userData}>{location.state.data.address}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>CITY</span>
                  <p className={styles.userData}>{location.state.data.city}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>PINCODE</span>
                  <p className={styles.userData}>{location.state.data.postcode}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>COUNTRY</span>
                  <p className={styles.userData}>{location.state.data.country}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>STATE</span>
                  <p className={styles.userData}>{location.state.data.state}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <Tabs>
          {roles && roles.map((role) => {
              return(
                <TabPane tab={role} key={role}>
                Content of Tab {role}
              </TabPane>
               
              )
          })} 
       </Tabs>
    </>
  )
}

export { ViewContact }
