import { Col, Row, Card } from 'antd'
import { useEffect, useState } from 'react'

import { ContactDetailModel } from '../../../../../model/model'
import styles from '../../view-contact.module.less'
import { fetchClientDetailApi } from '../api'
import { BankInfoModal } from './edit'

// import { fetchClientDetailsApi } from './api'

const BankInfo = (props: { data: ContactDetailModel; orgId: string | null; group: string }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  useEffect(() => {
    setContactInfo(props.data)
  }, [props])

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = async () => {
    await fetchClient()
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
          <span className={styles.userDetails}> BANK </span>
          <Col span={24}>
            {props.group === 'Consultant' ? (
              <span className={styles.userData}>
                {contactInfo?.bankAccountName ? contactInfo.bankAccountName : '-'}
              </span>
            ) : (
              <span className={styles.userData}>
                {contactInfo?.bankName ? contactInfo.bankName : '-'}
              </span>
            )}
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> ACCOUNT NUMBER </span>
          <Col span={24}>
            <span className={styles.userData}>
              {contactInfo?.bankAccountNo ? contactInfo.bankAccountNo : '-'}
            </span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>IFSC CODE</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.ifsc ? contactInfo.ifsc : '-'}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>BANK BRANCH</span>
          <Col span={24}>
            <span className={styles.userData}>{contactInfo?.bankBranch ? contactInfo.bankBranch : '-'}</span>
          </Col>
        </Col>
        
      </Row>
      <Row>
      {props.group === 'Vendor' || props.group === 'Client' ? (
          <Col span={12}>
            <span className={styles.userDetails}>SWIFT </span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.swift ? contactInfo.swift : '-'}
              </span>
            </Col>
          </Col>
        ) : (
          ''
        )}
      </Row>
      <BankInfoModal
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

export { BankInfo }
