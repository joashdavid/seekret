/* eslint-disable max-lines */
import { Card } from 'antd'
import { useState, useEffect } from 'react'

import { EmployeModal } from './edit'
import styles from '../../view-contact.module.less'
import { ContactDetailModel } from '../../../../../model/model'
import { fetchClientDetailApi } from '../api'
import { EmployementDetailEmpIntern } from './employement-details-emp-intern'
import { ServiceDetailVendor } from './service-details-vendoe-client'
import { ServiceDetailConsultant } from './service-detail-consultant'

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
      title={
        props.group === 'Employee' || props.group === 'Intern'
          ? 'Employment details'
          : 'Service Details'
      }
      extra={
        <span className={styles.edit} onClick={showModal}>
          Edit
        </span>
      }
      style={{ width: '25.835vw', height: '30.75vh' }}
    >
      {(props.group === 'Employee' ||  props.group === 'Intern') && (
        <EmployementDetailEmpIntern data={contactInfo} orgId={props.orgId} group={props.group} />
      )}
      {props.group === 'Vendor' && (
        <ServiceDetailVendor data={contactInfo} orgId={props.orgId} group={props.group} />
      )}
      {props.group === 'Consultant' && (
        <ServiceDetailConsultant data={contactInfo} orgId={props.orgId} group={props.group} />
      )}

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
