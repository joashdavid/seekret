/* eslint-disable max-lines */
import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../components/text-field-nosuffix'
import CycButton from '../../../../components/cyc-button/cyc-button'
import { ContactDetailModel } from '../../../../../model/model'

const MoreDetailsModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
}) => {
  const [phoneNumber, setphoneNumber] = useState<string>('')

  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }

  const getphoneNumber = (data: string) => {
    setphoneNumber(data)
  }
  return (
    <Modal
      title="Edit Employment Details"
      visible={props.isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      closeIcon={<CloseOutlined />}
      footer={[<CycButton value="UPDATE" disabled={false} onClick={handleCancel} />]}
      style={{ marginTop: '8.4vw' }}
    >
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Business Unit"
            name="employeeId"
            type="text"
            value={phoneNumber}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Department"
            name="dob"
            type="text"
            value={phoneNumber}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Designation"
            name="employeeId"
            type="text"
            value={phoneNumber}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Employment Status"
            name="dob"
            type="text"
            value={phoneNumber}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Office Location"
            name="employeeId"
            type="text"
            value={phoneNumber}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Joining Date"
            name="dob"
            type="text"
            value={phoneNumber}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Office Location"
            name="employeeId"
            type="text"
            value={phoneNumber}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Joining Date"
            name="dob"
            type="text"
            value={phoneNumber}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Notice Period"
            name="employeeId"
            type="text"
            value={phoneNumber}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getphoneNumber}
            label="Business Unit"
            name="dob"
            type="text"
            value={phoneNumber}
          />
        </Col>
      </Row>
     
    </Modal>
  )
}

export { MoreDetailsModal }
