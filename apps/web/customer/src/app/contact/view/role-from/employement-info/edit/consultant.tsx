/* eslint-disable max-lines */
import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../../components/text-field-nosuffix'
import CycButton from '../../../../../components/cyc-button/cyc-button'
import { ContactDetailModel } from '../../../../../../model/model'

import { updateConsultantApi } from './api'
// import { EditEmployeeIntern } from './employee-intern'

const ConsultantModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group: string
}) => {
  const [rate, setRate] = useState<string>('')
  const [consultantStatus, setConsultantStatus] = useState<string>('')
  const [currency, setCurrency] = useState<string>('')
  const [serviceType, setServiceType] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  //   const [bankAccountNo, setBankAccountNo] = useState<string>('')

  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }

  const getCurrency = (data: string) => {
    setCurrency(data)
  }
  const getConsultantStatus = (data: string) => {
    setConsultantStatus(data)
  }
  const getStartDate = (data: string) => {
    setStartDate(data)
  }
  const getEndDate = (data: string) => {
    setEndDate(data)
  }
  const getRate = (data: string) => {
    setRate(data)
  }
  const getServiceType = (data: string) => {
    setServiceType(data)
  }

  const updateClient = async () => {
    if (props.data) {
      const response = await updateConsultantApi(
        props.orgId,
        props.data.contactId,

        rate,
        consultantStatus,
        currency,
        serviceType,
        startDate,
        endDate
      )
      if (response.success) {
        handleOk()
      }
    }
  }

  return (
    <Modal
      title="Service Details"
      visible={props.isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      closeIcon={<CloseOutlined />}
      footer={[<CycButton value="UPDATE" disabled={false} onClick={updateClient} />]}
      style={{ marginTop: '8.4vw' }}
    >
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getRate}
            label={'Rate'}
            name="Rate"
            type="text"
            value={rate}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getCurrency}
            label={'Currency'}
            name="Currency"
            type="text"
            value={currency}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getServiceType}
            label={'Service type'}
            name="Service type"
            type="text"
            value={serviceType}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getStartDate}
            label={'Start date'}
            name="Start date"
            type="text"
            value={startDate}
          />
        </Col>
      </Row>

      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getEndDate}
            label="End date"
            name="End date"
            type="text"
            value={endDate}
          />
        </Col>

        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getConsultantStatus}
            label="Status"
            name="Status"
            type="text"
            value={consultantStatus}
          />
        </Col>
      </Row>
    </Modal>
  )
}

export { ConsultantModal }
