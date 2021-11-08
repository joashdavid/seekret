import { Col, Row, Card } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { MoreDetailsModal } from './more-details-modal'
import { ContactDetailModel } from '../../../../../model/model'

const MoreDetails = (props: { data: ContactDetailModel; orgId: string | null }) => {
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  const [isModalVisible, setIsModalVisible] = useState(false)
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
      title="More Details"
      extra={
        <span className={styles.edit} onClick={showModal}>
          Edit
        </span>
      }
      style={{ width: '25.835vw', height: '30.75vh' }}
    >
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> Business Unit </span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.businessUnit}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>Department</span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.department}</span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> DESIGNATION </span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.designation}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>REPORT TO</span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.reportingTo}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> EMPLOYMENT TYPE </span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.employmentType}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>EMPLOYMENT STATUS</span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.employeeStatus}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> OFFICE LOCATION </span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.officeLocation}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>JOINING DATE</span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.joiningDate}</span>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> NOTICE PERIOD </span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.noticePeriod}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>BUSINESS UNIT</span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.businessUnit}</span>
          </Col>
        </Col>
      </Row>
      <MoreDetailsModal
        data={contactInfo}
        orgId={props.orgId}
        isModalVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </Card>
  )
}

export { MoreDetails }
