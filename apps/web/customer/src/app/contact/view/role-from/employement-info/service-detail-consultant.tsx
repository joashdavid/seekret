/* eslint-disable max-lines */
import { Col, Row, } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'

const ServiceDetailConsultant = (props: {
  data: ContactDetailModel|undefined
  orgId: string | null
  group: string
}) => {
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  useEffect(() => {
    setContactInfo(props.data)
    console.log(props.group)
  }, [props])



  return (
    <>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> RATE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.employeeId ? contactInfo.employeeId : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>CURRENCY</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.dob ? contactInfo.dob : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> UNIT </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.gender ? contactInfo.gender : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>SERVICE TYPE</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.bloodGroup ? contactInfo.bloodGroup : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> START DATE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.aadharNo ? contactInfo.aadharNo : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>END DATE</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.pan ? contactInfo.pan : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>STATUS </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.officeLocation ? contactInfo.officeLocation : '-'}
            </span>
          </Col>
        </Col>
        
      </Row>

   </>
  )
}
export { ServiceDetailConsultant }
