import { Col, Row } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'

const MoreDetailVendorClient = (props: {
  data: ContactDetailModel | undefined
  orgId: string | null
  group: string
}) => {
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  useEffect(() => {
    setContactInfo(props.data)
  }, [props])

  return (
    <>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> PAN NUMBER </span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.pan ? contactInfo.pan : '-'}</span>
          </Col>
        </Col>

        <Col span={12}>
          <span className={styles.userDetails}>WEBSITE</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.website ? contactInfo.website : '-'}
            </span>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> ENGAGEMENTTYPE TYPE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.engType ? contactInfo.engType : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> GST REG TYPE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.gstRegType ? contactInfo.gstRegType : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> GST REG NO </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.gstRegNo ? contactInfo.gstRegNo : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> STATUS </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.vendorStatus ? contactInfo.vendorStatus : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      {props.group === 'Client' && (
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
            <span className={styles.userDetails}> PAYMENT TERMS </span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.vendorStatus ? contactInfo.vendorStatus : '-'}
              </span>
            </Col>
          </Col>
        </Row>
      )}
      <Row>
      <Col span={12}>
          <span className={styles.userDetails}> TRN NO </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.trnNo ? contactInfo.trnNo : '-'}
            </span>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export { MoreDetailVendorClient }
