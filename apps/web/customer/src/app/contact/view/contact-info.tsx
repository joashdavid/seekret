import { Col, Row } from 'antd'
import {  useEffect, useState } from 'react'
import { Button } from 'antd'
import styles from './view-contact.module.less'
const ROLES = [
  {
    roleId: 1,
    roleName: 'Employee',
  },
  {
    roleId: 2,
    roleName: 'Intern',
  },
  {
    roleId: 3,
    roleName: 'Consultant',
  },
  {
    roleId: 4,
    roleName: 'Vendor',
  },
  {
    roleId: 5,
    roleName: 'Client',
  },
]

const ContactInfo = (props: {
  groups: number[];
  contactName: string;
  phoneNo:string;
  email:string;
  contactType:string;
  address:string;
  city:string;
  postcode:string;
  country:string;
  state:string;
}) => {
  const [roleString, setRoleString] = useState<string>('')
  useEffect(() => {
    if (props.groups) {
      const roles: string[] = []
      ROLES.forEach((role) => {
        if (props.groups.includes(role.roleId)) {
          roles.push(role.roleName)
        }
        setRoleString(roles.toString())
      })
    }
  }, [])

  return (
    
      <Row>
        <Col span={2}>
          <img src="../../../assets/default-user.png" alt="" className={styles.profileImg} />
        </Col>

        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col span={5}>
                <p style={{ color: '#1D4B75', fontWeight: 'bold', fontSize: '1.7vh' }}>
                  {props.contactName}
                </p>
              </Col>
              <Col>
                <Row justify="end">
                  <Col span={5}>
                    <Button >DOWNLOAD</Button>
                  </Col>
                  <Col span={3} />
                  <Col span={5}>
                    <Button >PRINT</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <div>
                  <span className={styles.title}>PHONE NO:</span>
                  <p className={styles.userData}>{props.phoneNo}</p>
                </div>
              </Col>
              <Col span={5}>
                <div>
                  <span className={styles.title}>EMAIL</span>
                  <p className={styles.userData}>{props.email}</p>
                </div>
              </Col>
              <Col span={5}>
                <div>
                  <span className={styles.title}>ROLE</span>
                  <p className={styles.userData}>
                    {roleString.length > 0 ? roleString : 'Unassigned'}
                  </p>
                </div>
              </Col>
              <Col span={5}>
                <div>
                  <span className={styles.title}>CONTACT TYPE</span>
                  <p className={styles.userData}>{props.contactType}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <div>
                  <span className={styles.title}>ADDRESS</span>
                  <p className={styles.userData}>{props.address}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>CITY</span>
                  <p className={styles.userData}>{props.city}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>PINCODE</span>
                  <p className={styles.userData}>{props.postcode}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>COUNTRY</span>
                  <p className={styles.userData}>{props.country}</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <span className={styles.title}>STATE</span>
                  <p className={styles.userData}>{props.state}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
  )
}

export { ContactInfo }
