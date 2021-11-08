import { Col, Row, Card } from 'antd'
import { useEffect, useState } from 'react'

import { ContactDetailModel } from '../../../../../model/model'
import styles from '../../view-contact.module.less'
import { fetchClientDetailsApi } from '../api'
import { BankInfoModal } from './bank-info-modal'

// import { fetchClientDetailsApi } from './api'

const BankInfo = (props: { data: ContactDetailModel; orgId: string | null }) => {
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
      const response = await fetchClientDetailsApi(props.orgId, props.data.contactId)
      setContactInfo(response.data)
      return
    }
  }
  useEffect(() => {
    console.log(props, 'Bank')
  }, [props])

  return (
    <Card
      title="Bank Details"
      extra={
        <span className={styles.edit} onClick={showModal}>
          Edit
        </span>
      }
      style={{ width: '25.835vw', height: '30.75vh' }}
    >
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> Bank </span>
          <Col span={24}>
            <span className={styles.userData}>
              {props.data.bankName ? props.data.bankName : 'NIL'}
            </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> Account Number </span>
          <Col span={24}>
            <span className={styles.userData}>
              {props.data.bankAccountNo ? props.data.bankAccountNo : 'NIL'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>IFSC Code</span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.ifsc ? props.data.ifsc : 'NIL'}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>SWIFT </span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.swift ? props.data.swift : 'NIL'}</span>
          </Col>
        </Col>
      </Row>
      <BankInfoModal
        data={contactInfo}
        orgId={props.orgId}
        isModalVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </Card>
  )
}

export { BankInfo }
