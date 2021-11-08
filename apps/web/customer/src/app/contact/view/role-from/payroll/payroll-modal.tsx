import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../components/text-field-nosuffix'
import CycButton from '../../../../components/cyc-button/cyc-button'
import { ContactDetailModel } from '../../../../../model/model'
import { updateClientApi } from './api'

const PayRollInfoModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group:string
}) => {
  const [netSalary, setNetSalary] = useState<string>('')
  const [ctc, setCtc] = useState<string>('')
  const [insuranceProvider, setInsuranceProvider] = useState<string>('')
  const [insuranceStatus, setInsuranceStatus] = useState<string>('')
  const [insuranceNo, setInsuranceNo] = useState<string>('')

  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }

  const getNetsalary = (data: string) => {
    setNetSalary(data)
  }
  const getCtc = (data: string) => {
    setCtc(data)
  }
  const getInsuranceProvider = (data: string) => {
    setInsuranceProvider(data)
  }
  const getInsuranceStatus = (data: string) => {
    setInsuranceStatus(data)
  }
  const getInsuranceNo = (data: string) => {
    setInsuranceNo(data)
  }

  const updateClient = async() => {
      if(props.data){
        const response =await updateClientApi(
        props.orgId,
        props.data.contactId,
            netSalary,
            ctc,
            insuranceProvider,
            insuranceNo,
            insuranceStatus,
            props.group,
          )
         if(response.success){
             handleOk()
         }
      }
 
  }

  return (
    <Modal
      title="Edit Payroll Details"
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
            onUserInput={getNetsalary}
            label="Net Salary"
            name="employeeId"
            type="text"
            value={netSalary}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix onUserInput={getCtc} label="CTC" name="dob" type="text" value={ctc} />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getInsuranceProvider}
            label="Insurance Provider"
            name="employeeId"
            type="text"
            value={insuranceProvider}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getInsuranceStatus}
            label="Insurance Status"
            name="dob"
            type="text"
            value={insuranceStatus}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getInsuranceNo}
            label="Insurance Number"
            name="employeeId"
            type="text"
            value={insuranceNo}
          />
        </Col>
      </Row>
    </Modal>
  )
}

export { PayRollInfoModal }
