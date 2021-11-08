import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../components/text-field-nosuffix'
import CycButton from '../../../../components/cyc-button/cyc-button'
import { ContactDetailModel } from '../../../../../model/model'
import { updateClientApi } from './api'

const BankInfoModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group: string
}) => {
  const [bankName, setBankName] = useState<string>('')
  const [bankAccountNo, setBankAccountNo] = useState<string>('')
  const [ifsc, setIfsc] = useState<string>('')
//   const [swift, setSwift] = useState<string>('')

  const getBankName = (data: string) => {
    setBankName(data)
  }
  const getBankAccountNo = (data: string) => {
    setBankAccountNo(data)
  }
  const getIfsc = (data: string) => {
    setIfsc(data)
  }
//   const getSwift = (data: string) => {
//     setSwift(data)
//   }
  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }

  const updateClient = async () => {
    if (props.data) {
      const response = await updateClientApi(
        props.orgId,
        props.data.contactId,
        bankName,
        bankAccountNo,
        ifsc,
        props.group
      )
      if(response.success){
          handleOk()
      }
    }
  }
  return (
    <Modal
      title="Edit Bank Details"
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
            onUserInput={getBankName}
            label="Bank Name"
            name="employeeId"
            type="text"
            value={bankName}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getBankAccountNo}
            label="Account Number"
            name="dob"
            type="text"
            value={bankAccountNo}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getIfsc}
            label="IFSC Code"
            name="employeeId"
            type="text"
            value={ifsc}
          />
        </Col>
        <Col span={1}></Col>
        {/* <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getSwift}
            label="SWIFT"
            name="dob"
            type="text"
            value={swift}
          />
        </Col> */}
      </Row>
    </Modal>
  )
}

export { BankInfoModal }
