/* eslint-disable max-lines */
import { Col, Row } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'

const EmployementDetailEmpIntern = (props: {
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
          <span className={styles.userDetails}> BUSINESS UNIT </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.businessUnit ? contactInfo.businessUnit : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>DEPARTMENT</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.department ? contactInfo.department : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> DESIGNATION </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.designation ? contactInfo.designation : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>REPORT TO</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.reportingTo ? contactInfo.reportingTo : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> EMPLOYMENT TYPE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.employmentType ? contactInfo.employmentType : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>EMPLOYEMENT STATUS</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.employmentStatus ? contactInfo.employmentStatus : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> OFFICE LOCATION </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.officeLocation ? contactInfo.officeLocation : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>JOINING DATE</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.joiningDate ? contactInfo.joiningDate : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>NOTICE PERIOD</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.noticePeriod ? contactInfo.noticePeriod : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>BAND</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.band ? contactInfo.band : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>RESIGNATION DATE </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.resignationDate ? contactInfo.resignationDate : '-'}
            </span>
          </Col>
        </Col>
        {props.group === 'Employee' && (
          <Col span={12}>
            <span className={styles.userDetails}>PREVIOUS EMPLOYER </span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.resignationDate ? contactInfo.resignationDate : '-'}
              </span>
            </Col>
          </Col>
        )}
      </Row>
    </>
  )
}
export { EmployementDetailEmpIntern }
