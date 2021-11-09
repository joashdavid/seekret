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
              {contactInfo?.rate ? contactInfo.rate : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>CURRENCY</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.currency ? contactInfo.currency : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> UNIT </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.unit ? contactInfo.unit : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>SERVICE TYPE</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.serviceType ? contactInfo.serviceType : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> START DATE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.startDate ? contactInfo.startDate : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>END DATE</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.endDate ? contactInfo.endDate : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>STATUS </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.consultantStatus ? contactInfo.consultantStatus : '-'}
            </span>
          </Col>
        </Col>
        
      </Row>

   </>
  )
}
export { ServiceDetailConsultant }
