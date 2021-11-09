import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../../components/text-field-nosuffix'
import CycButton from '../../../../../components/cyc-button/cyc-button'
import { ContactDetailModel } from '../../../../../../model/model'
import { updateVendorClientApi } from './api'

const VendorClientModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group: string
}) => {
  const [rate, setRate] = useState<string>('')

  const [currency, setCurrency] = useState<string>('')

  const [businessType, setBusinessType] = useState<string>('')
  const [paymentTerms, setPaymentTerms] = useState<string>('')
  const [service, setService] = useState<string>('')
  const [unit, setUnit] = useState<string>('')

  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }

  const getCurrency = (data: string) => {
    setCurrency(data)
  }

  const getRate = (data: string) => {
    setRate(data)
  }

  const getBusinessType = (data: string) => {
    setBusinessType(data)
  }
  const getPaymentTerms = (data: string) => {
    setPaymentTerms(data)
  }
  const getService = (data: string) => {
    setService(data)
  }
  const getUnit = (data: string) => {
    setUnit(data)
  }
  const updateClient = async () => {
    if (props.data) {
      const response = await updateVendorClientApi(
        props.orgId,
        props.data.contactId,
        rate,
        currency,
        businessType,
        paymentTerms,
        service,
        unit,
        props.group
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
            onUserInput={getService}
            label={'Service'}
            name="Service"
            type="text"
            value={service}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getBusinessType}
            label={'Business type'}
            name="Business type"
            type="text"
            value={businessType}
          />
        </Col>
      </Row>
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
            onUserInput={getUnit}
            label={'Unit'}
            name="Unit"
            type="text"
            value={unit}
          />
        </Col>
      </Row>

      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getCurrency}
            label="Currency"
            name="Currency"
            type="text"
            value={currency}
          />
        </Col>

        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getPaymentTerms}
            label="Payment terms"
            name="Payment terms"
            type="text"
            value={paymentTerms}
          />
        </Col>
      </Row>
    </Modal>
  )
}

export { VendorClientModal }
