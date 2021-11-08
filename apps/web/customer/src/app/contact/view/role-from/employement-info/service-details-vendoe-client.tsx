/* eslint-disable max-lines */
import { Col, Row } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'

const ServiceDetailVendor = (props: {
  data: ContactDetailModel|undefined,
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
          <span className={styles.userDetails}> PRODUCT/SERVICE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.employeeId ? contactInfo.employeeId : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>BUSINESS TYPE</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.dob ? contactInfo.dob : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> RATE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.gender ? contactInfo.gender : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>UNIT</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.bloodGroup ? contactInfo.bloodGroup : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> CURRENCY </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.aadharNo ? contactInfo.aadharNo : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>PAYMENT TERMS</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.pan ? contactInfo.pan : '-'}</span>
          </Col>
        </Col>
      </Row>
    </>
  )
}
export { ServiceDetailVendor }
