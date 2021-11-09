/* eslint-disable max-lines */
import { Col, Row } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'

const MoreDetailEmployeeIntern = (props: {
  data: ContactDetailModel|undefined
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
          <span className={styles.userDetails}>DOB</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.dob ? contactInfo.dob : '-'}</span>
          </Col>
        </Col>
      </Row>

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
          <span className={styles.userDetails}>BLOOD GROUP</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.bloodGroup ? contactInfo.bloodGroup : '-'}
            </span>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> AADHAR NO</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.aadharNo ? contactInfo.aadharNo : '-'}
            </span>
          </Col>
        </Col>

        <Col span={12}>
          <span className={styles.userDetails}>PAN NO</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.pan ? contactInfo.pan : '-'}</span>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          {props.group === 'Employee' && (
            <>
              <span className={styles.userDetails}> UAN NO </span>
              <Col span={24}>
                <span className={styles.userData}>
                  {contactInfo?.uanNo ? contactInfo.uanNo : '-'}
                </span>
              </Col>
            </>
          )}
        </Col>
        {/* <Col span={12}>
          <span className={styles.userDetails}>JOINING DATE</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.joiningDate ? contactInfo.joiningDate : '-'}
            </span>
          </Col>
        </Col> */}
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> EMERGENCY CONTACT PERSON </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.emergencyContact ? contactInfo.emergencyContact : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> EMERGENCY CONTACT NO </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.emergencyContact ? contactInfo.emergencyContact : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> RELATIONSHIP </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.relationShip ? contactInfo.relationShip : '-'}
            </span>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export { MoreDetailEmployeeIntern }
