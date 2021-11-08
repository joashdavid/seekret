import { Col, Row, Card } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { PayRollInfoModal } from './payroll-modal'
import { ContactDetailModel } from '../../../../../model/model'
import { fetchClientDetailApi } from '../api'

const PayRollInfo = (props: { data: ContactDetailModel; orgId: string | null, group:string }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  useEffect(() => {
    setContactInfo(props.data)
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
      const response = await fetchClientDetailApi(props.orgId, props.data.contactId,props.group)
      setContactInfo(response.data)
      return
    }
  }
  return (
    <Card
      title="Payroll & Insurance"
      extra={
        <span className={styles.edit} onClick={showModal}>
          Edit
        </span>
      }
      style={{ width: '25.835vw', height: '30.75vh' }}
    >
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> NET SALARY </span>
          <Col span={24}>
            {props.group === "Employee" && <span className={styles.userData}> {contactInfo?.netSalary ? contactInfo.netSalary : '-'} </span>}
            {props.group === "Intern" && <span className={styles.userData}> {contactInfo?.netStipend ? contactInfo.netStipend : '-'} </span>}
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> CTC </span>
          <Col span={24}>
            <span className={styles.userData}> {contactInfo?.ctc ? contactInfo.ctc : '-'} </span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>INSURANCE PROVIDER</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.insuranceProvider ? contactInfo.insuranceProvider : '-'}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>INSURANCE STATUS </span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.insuranceStatus ? contactInfo.insuranceStatus : '-'}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>INSURANCE NUMBER</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.insuranceNo ? contactInfo.insuranceNo : '-'}</span>
          </Col>
        </Col>
      </Row>
      <PayRollInfoModal
        data={contactInfo}
        orgId={props.orgId}
        isModalVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        group = {props.group}
      />
    </Card>
  )
}

export { PayRollInfo }
