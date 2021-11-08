/* eslint-disable max-lines */
import { Card } from 'antd'
import { useState, useEffect } from 'react'

import styles from '../../view-contact.module.less'
import { MoreDetailsModal } from './edit'
import { ContactDetailModel } from '../../../../../model/model'
import { fetchClientDetailApi } from '../api'
import { MoreDetailsConsultant } from './more-detail-consultant'
import { MoreDetailVendorClient } from './more-details-vendor-client'
import {MoreDetailEmployeeIntern} from './more-details-emp-intern'

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
      {props.group === 'Consultant' && (
        <MoreDetailsConsultant data={contactInfo} orgId={props.orgId} group={props.group} />
      )}
      {(props.group === 'Employee' || props.group === 'Intern') && (
        <MoreDetailEmployeeIntern data={contactInfo} orgId={props.orgId} group={props.group} />
      )}
      {(props.group === 'Vendor' || props.group === 'Client') && (
        <MoreDetailVendorClient data={contactInfo} orgId={props.orgId} group={props.group} />
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
