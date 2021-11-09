/* eslint-disable max-lines */
import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../../components/text-field-nosuffix'
import CycButton from '../../../../../components/cyc-button/cyc-button'
import { ContactDetailModel } from '../../../../../../model/model'
import { fetchClientDetailApi } from '../../api'
import { updateVendorClientApi } from './api'

const MoreDetailsVendorClientModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group: string
}) => {
  const [panNo, setPanNo] = useState<string>('')
  const [trnNo, setTrnNo] = useState<string>('')
  const [website, setWebsite] = useState<string>('')
  const [vendorStatus, setVendorStatus] = useState<string>('')
  const [gstRegNo, setGstRegNo] = useState<string>('')
  const [gstRegType, setGstRegType] = useState<string>('')
  const [engType, setEngType] = useState<string>('')
  const [paymentTerms, setPaymentTerms] = useState<string>('')
  const [currency, setCurrency] = useState<string>('')

  const fetchClient = async () => {
    if (props.data) {
      const response = await fetchClientDetailApi(props.orgId, props.data.contactId, props.group)
      console.log(response.data)
    }
  }

  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }

  const getPanNo = (data: string) => {
    setPanNo(data)
  }

  const getGstRegType = (data: string) => {
    setGstRegType(data)
  }
  const getGstRegNo = (data: string) => {
    setGstRegNo(data)
  }
  const getWebsite = (data: string) => {
    setWebsite(data)
  }
  const getVendorStatus = (data: string) => {
    setVendorStatus(data)
  }
  const getTrnNo = (data: string) => {
    setTrnNo(data)
  }
  const getEngType = (data: string) => {
    setEngType(data)
  }
  const getCurrency = (data: string) => {
    setCurrency(data)
  }
  const getPaymentTerms = (data: string) => {
    setPaymentTerms(data)
  }
  // const getRelationShip = (data: string) => {
  //   setRelationship(data)
  // }

  const updateClient = async () => {
    if (props.data) {
      const response = await updateVendorClientApi(
        props.orgId,
        props.data.contactId,
        // employeeId,
        panNo,
        website,
        gstRegNo,
        gstRegType,
        vendorStatus,
        trnNo,
        engType,
        props.group
        // emergencyContactNo,
        // relationship
      )
      if (response.success) {
        fetchClient()
        handleOk()
      }
      console.log(response)
    }
  }

  return (
    <Modal
      title="Edit Details"
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
            onUserInput={getPanNo}
            label="Pan No."
            name="employeeId"
            type="text"
            value={panNo}
          />
        </Col>

        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getWebsite}
            label="Website"
            name="website"
            type="text"
            value={website}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <Col span={24}>
            <TextFieldNoSuffix
              onUserInput={getEngType}
              label="Engagement type"
              name="GST"
              type="text"
              value={engType}
            />
          </Col>
        </Col>
        <Col span={1}></Col>

        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getGstRegType}
            label="Gst registation type"
            name="Gst registation type"
            type="text"
            value={gstRegType}
          />
        </Col>

        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getGstRegNo}
            label="Gst registration no"
            name="dob"
            type="text"
            value={gstRegNo}
          />
        </Col>
      </Row>

      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getTrnNo}
            label="TRN No"
            name="TRN no"
            type="text"
            value={trnNo}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getVendorStatus}
            label="Status"
            name="status"
            type="text"
            value={vendorStatus}
          />
        </Col>
      </Row>
      {props.group === 'Client' && (
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
              label="Payment Terms"
              name="PaymentTerms"
              type="text"
              value={paymentTerms}
            />
          </Col>
        </Row>
      )}
    </Modal>
  )
}

export { MoreDetailsVendorClientModal }
