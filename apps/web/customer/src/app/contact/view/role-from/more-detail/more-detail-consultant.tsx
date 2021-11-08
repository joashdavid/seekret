import { Col, Row } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'

const MoreDetailsConsultant = (props: {
  data: ContactDetailModel|undefined,
  orgId: string | null
  group:string

}) => {
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()

  useEffect(() => {
    setContactInfo(props.data)
  }, [props])

  return (
    <>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> GENDER </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.gender ? contactInfo.gender : '-'}
            </span>
          </Col>
        </Col>

        <Col span={12}>
          <span className={styles.userDetails}>DOB</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.dob ? contactInfo.dob : '-'}</span>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> GST </span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.gst ? contactInfo.gst : '-'}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>PAN</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.pan ? contactInfo.pan : '-'}</span>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export { MoreDetailsConsultant }
