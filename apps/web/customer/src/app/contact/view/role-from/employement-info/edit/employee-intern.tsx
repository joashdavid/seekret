/* eslint-disable max-lines */
import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../../components/text-field-nosuffix'
import CycButton from '../../../../../components/cyc-button/cyc-button'
import { ContactDetailModel } from '../../../../../../model/model'
import { updateEmployeeApi } from './api'
// import { EditEmployeeIntern } from './employee-intern'

const EmployeInternModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group: string
}) => {
  const [businessUnit, setBusinessUnit] = useState<string>('')
  const [department, setDepartment] = useState<string>('')
  const [designation, setDesignation] = useState<string>('')
  const [employeeType, setEmployeeType] = useState<string>('')
  const [employeeStatus, setEmployeeStatus] = useState<string>('')
  const [officeLocation, setOfficeLocation] = useState<string>('')
  const [joiningDate, setJoiningDate] = useState<string>('')
  const [resignationDate, setResignationDate] = useState<string>('')
  const [noticePeriod, setNoticePeriod] = useState<string>('')
  const [reportTo, setReportTo] = useState<string>('')
  const [previousEmployer, setPreviousEmployer] = useState<string>('')

  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }
  const getDepartment = (data: string) => {
    setDepartment(data)
  }
  const getBusinessUnit = (data: string) => {
    setBusinessUnit(data)
  }
  const getDesignation = (data: string) => {
    setDesignation(data)
  }
  const getEmployeeType = (data: string) => {
    setEmployeeType(data)
  }
  const getEmployeeStatus = (data: string) => {
    setEmployeeStatus(data)
  }
  const getOfficeLocation = (data: string) => {
    setOfficeLocation(data)
  }
  const getJoiningDate = (data: string) => {
    setJoiningDate(data)
  }
  const getResignationDate = (data: string) => {
    setResignationDate(data)
  }
  const getNoticePeriod = (data: string) => {
    setNoticePeriod(data)
  }
  const getReportTo = (data: string) => {
    setReportTo(data)
  }
  const getPreviosEmployer = (data: string) => {
    setPreviousEmployer(data)
  }
//   const getCurrency = (data: string) => {
//     setCurrency(data)
//   }
//   const getConsultantStatus = (data: string) => {
//     setConsultantStatus(data)
//   }
//   const getStartDate = (data: string) => {
//     setStartDate(data)
//   }
//   const getEndDate = (data: string) => {
//     setEndDate(data)
//   }
//   const getRate = (data: string) => {
//     setRate(data)
//   }
//   const getServiceType = (data: string) => {
//     setServiceType(data)
//   }
//   const getBusinessType = (data: string) => {
//     setBusinessType(data)
//   }
//   const getPaymentTerms = (data: string) => {
//     setPaymentTerms(data)
//   }
//   const getService = (data: string) => {
//     setService(data)
//   }
//   const getUnit = (data: string) => {
//     setUnit(data)
//   }
  const updateClient = async () => {
    if (props.data) {
      const response = await updateEmployeeApi(
        props.orgId,
        props.data.contactId,
        businessUnit,
        department,
        designation,
        employeeType,
        employeeStatus,
        officeLocation,
        joiningDate,
        resignationDate,
        noticePeriod,
        reportTo,
        previousEmployer,
        props.group
      )
      if (response.success) {
        handleOk()
      }
    }
  }

  return (
    <Modal
      title="Employement Details"
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
            onUserInput={getBusinessUnit}
            label={'Business Unit'}
            name="Business Unit"
            type="text"
            value={businessUnit}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getDepartment}
            label={'Department'}
            name="Department"
            type="text"
            value={department}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getDesignation}
            label={'Designation'}
            name="Designation"
            type="text"
            value={designation}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getReportTo}
            label={'Report to'}
            name="Report to"
            type="text"
            value={reportTo}
          />
        </Col>
      </Row>

      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getEmployeeStatus}
            label="Employment Status"
            name="Employment Status"
            type="text"
            value={employeeStatus}
          />
        </Col>

        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getEmployeeType}
            label="Employee Type"
            name="Employee Type"
            type="text"
            value={employeeType}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getOfficeLocation}
            label="Office Location"
            name="Office Location"
            type="text"
            value={officeLocation}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getJoiningDate}
            label="Joining Date"
            name="Joining Date"
            type="text"
            value={joiningDate}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getNoticePeriod}
            label="Notice Period"
            name="Notice Period"
            type="text"
            value={noticePeriod}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getResignationDate}
            label="Resignation Date"
            name="Resignation Date"
            type="text"
            value={resignationDate}
          />
        </Col>
      </Row>
      {props.group === 'Employee' && (
        <Row justify="space-between">
          <Col span={12}>
            <TextFieldNoSuffix
              onUserInput={getPreviosEmployer}
              label="Previous Employer"
              name="PreviousEmployee"
              type="text"
              value={previousEmployer}
            />
          </Col>
        </Row>
      )}
    </Modal>
  )
}

export { EmployeInternModal }
