import { Col, Row, Card } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { PayRollInfoModal } from './payroll-modal'
import { ContactDetailModel } from '../../../../../model/model'

const PayRollInfo = (props: { data: ContactDetailModel; orgId: string | null }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  useEffect(() => {
    setContactInfo(props.data)
  }, [props])

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    // fetchClient()
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
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
            <span className={styles.userData}> Lorem Ipsum </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> CTC </span>
          <Col span={24}>
            <span className={styles.userData}> Lorem Ipsum </span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>INSURANCE PROVIDER</span>
          <Col span={24}>
            <span className={styles.userData}>Lorem Ipsum</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>INSURANCE STATUS </span>
          <Col span={24}>
            <span className={styles.userData}>Lorem Ipsum</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>INSURANCE NUMBER</span>
          <Col span={24}>
            <span className={styles.userData}>Lorem Ipsum</span>
          </Col>
        </Col>
      </Row>
      <PayRollInfoModal
        data={contactInfo}
        orgId={props.orgId}
        isModalVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </Card>
  )
}

export { PayRollInfo }
