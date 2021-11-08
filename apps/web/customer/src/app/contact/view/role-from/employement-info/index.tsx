/* eslint-disable max-lines */
import { Col, Row, Card } from 'antd'
import { useState, useEffect } from 'react'

import { EmployeModal } from './employment-modal'
import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'
import { fetchClientDetailApi } from '../api'

const EmployeeMentInfo = (props: {
  data: ContactDetailModel
  orgId: string | null
  group: string
}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  useEffect(() => {
    setContactInfo(props.data)
    console.log(props.group)
  }, [props])

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    fetchClient()
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const fetchClient = async () => {
    if (props.data) {
      const response = await fetchClientDetailApi(props.orgId, props.data.contactId, props.group)
      setContactInfo(response.data)
      return
    }
  }

  return (
    <Card
      title="Employment details"
      extra={
        <span className={styles.edit} onClick={showModal}>
          Edit
        </span>
      }
      style={{ width: '25.835vw', height: '30.75vh' }}
    >
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> EMPLOYEE ID </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.employeeId ? contactInfo.employeeId : '-'}
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
      <Row></Row>
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
          <span className={styles.userDetails}> AADHAR NO. </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.aadharNo ? contactInfo.aadharNo : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>PAN CARD NO.</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.pan ? contactInfo.pan : '-'}</span>
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
          <span className={styles.userDetails}>UAN NO</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.uanNo ? contactInfo.uanNo : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> NOTICE PERIOD </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.noticePeriod ? contactInfo.noticePeriod : '-'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> EMERGENCY CONTACT NUMBER</span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.emergencyContact ? contactInfo.emergencyContact : '-'}
            </span>
          </Col>
        </Col>
      </Row>

      <EmployeModal
        data={contactInfo}
        orgId={props.orgId}
        isModalVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        group={props.group}
      />
    </Card>
  )
}
export { EmployeeMentInfo }
