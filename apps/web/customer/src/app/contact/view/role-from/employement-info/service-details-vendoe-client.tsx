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
              {contactInfo?.service ? contactInfo.service : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>BUSINESS TYPE</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.businessType ? contactInfo.businessType : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> RATE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.rate ? contactInfo.rate : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>UNIT</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.unit ? contactInfo.unit : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> CURRENCY </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.currency ? contactInfo.currency : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>PAYMENT TERMS</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.paymentTerms ? contactInfo.paymentTerms : '-'}</span>
          </Col>
        </Col>
      </Row>
    </>
  )
}
export { ServiceDetailVendor }
