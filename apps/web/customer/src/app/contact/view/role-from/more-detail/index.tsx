import { Col, Row, Card } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { MoreDetailsModal } from './more-details-modal'
import { ContactDetailModel } from '../../../../../model/model'
import { fetchClientDetailApi } from '../api'

const MoreDetails = (props: { data: ContactDetailModel; orgId: string | null; group: string }) => {
  const [contactInfo, setContactInfo] = useState<ContactDetailModel>()
  const [isModalVisible, setIsModalVisible] = useState(false)
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
      const response = await fetchClientDetailApi(props.orgId, props.data.contactId, props.group)
      setContactInfo(response.data)
      return
    }
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
          {props.group === 'Vendor' || props.group === 'Client' ? (
            <>
              <span className={styles.userDetails}>  UNIT </span>
              <Col span={24}>
                <span className={styles.userData}>
                  {contactInfo?.unit ? contactInfo.unit : '-'}
                </span>
              </Col>
            </>
          ) : (
            <>
            <span className={styles.userDetails}> BUSINESS UNIT </span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.businessUnit ? contactInfo.businessUnit : '-'}
              </span>
            </Col>
          </>
          )}
        </Col>
        {props.group === 'Vendor' || props.group === 'Client' ? (
          <Col span={12}>
            <span className={styles.userDetails}>WEBSITE</span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.website ? contactInfo.website : '-'}
              </span>
            </Col>
          </Col>
        ) : (
          <Col span={12}>
            <span className={styles.userDetails}>DEPARTMENT</span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.department ? contactInfo.department : '-'}
              </span>
            </Col>
          </Col>
        )}
      </Row>
      {props.group === 'Vendor' || props.group === 'Client' ? (
        ''
      ) : (
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
      )}
      <Row>
        {props.group === 'Vendor' || props.group === 'Client' ? (
          <Col span={12}>
            <span className={styles.userDetails}> BUSINESS TYPE </span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.businessType ? contactInfo.businessType : '-'}
              </span>
            </Col>
          </Col>
        ) : (
          <Col span={12}>
            <span className={styles.userDetails}> EMPLOYMENT TYPE </span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.employmentType ? contactInfo.employmentType : '-'}
              </span>
            </Col>
          </Col>
        )}
        {props.group === 'Vendor' || props.group === 'Client' ? (
          <Col span={12}>
            <span className={styles.userDetails}> VENDOR STATUS </span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.vendorStatus ? contactInfo.vendorStatus : '-'}
              </span>
            </Col>
          </Col>
        ) : (
          <Col span={12}>
            <span className={styles.userDetails}>EMPLOYMENT STATUS</span>
            <Col span={24}>
              <span className={styles.userData}>
                {contactInfo?.employeeStatus ? contactInfo.employmentStatus : '-'}
              </span>
            </Col>
          </Col>
        )}
      </Row>
      {props.group === 'Vendor' || props.group === 'Client' ? (
        ''
      ) : (
        <>
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
              <span className={styles.userDetails}> NOTICE PERIOD </span>
              <Col span={24}>
                <span className={styles.userData}>
                  {contactInfo?.noticePeriod ? contactInfo.noticePeriod : '-'}
                </span>
              </Col>
            </Col>
            <Col span={12}>
              <span className={styles.userDetails}>BUSINESS UNIT</span>
              <Col span={24}>
                <span className={styles.userData}>
                  {contactInfo?.businessUnit ? contactInfo.businessUnit : '-'}
                </span>
              </Col>
            </Col>
          </Row>
        </>
      )}
      <MoreDetailsModal
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

export { MoreDetails }
