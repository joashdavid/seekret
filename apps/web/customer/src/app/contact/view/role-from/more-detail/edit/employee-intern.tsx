/* eslint-disable max-lines */
import { Col, Row } from 'antd'
import { ContactDetailModel } from '../../../../../../model/model'

import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../../components/text-field-nosuffix'


const EditEmployeeIntern = (props: {
    data:ContactDetailModel
  getDepartment: (arg0: string) => void
  getBusinessUnit: (arg0: string) => void
  getEmployeeType: (arg0: string) => void
  getEmployeeStatus: (arg0: string) => void
  getOfficeLocation: (arg0: string) => void
  getJoiningDate: (arg0: string) => void
  getResignationDate: (arg0: string) => void
  getNoticePeriod: (arg0: string) => void
  getReportTo: (arg0: string) => void
  getDesignation: (arg0: string) => void
}) => {
  const [businessUnit, setBusinessUnit] = useState<string|null>(props.data.businessUnit)
  const [department, setDepartment] = useState<string|null>(props.data.department)
  const [designation, setDesignation] = useState<string|null>(props.data.designation)
  const [employeeType, setEmployeeType] = useState<string|null>(props.data.employmentType)
  const [employeeStatus, setEmployeeStatus] = useState<string|null>(props.data.employeeStatus)
  const [officeLocation, setOfficeLocation] = useState<string|null>(props.data.officeLocation)
  const [joiningDate, setJoiningDate] = useState<string|null>(props.data.joiningDate)
  const [resignationDate, setResignationDate] = useState<string|null>(props.data.resignationDate)
  const [noticePeriod, setNoticePeriod] = useState<string|null>(props.data.noticePeriod)
  const [reportTo, setReportTo] = useState<string|null>(props.data.reportingTo)
  //   const [bankAccountNo, setBankAccountNo] = useState<string|null>('')


  const getDepartment = (data: string) => {
    props.getDepartment(data)
    setDepartment(data)
  }
  const getBusinessUnit = (data: string) => {
    props.getBusinessUnit(data)
    setBusinessUnit(data)
  }
  const getDesignation = (data: string) => {
    setDesignation(data)
    props.getDesignation(data)
  }
  const getEmployeeType = (data: string) => {
    setEmployeeType(data)
    props.getEmployeeType(data)
  }
  const getEmployeeStatus = (data: string) => {
    setEmployeeStatus(data)
    props.getEmployeeStatus(data)
  }
  const getOfficeLocation = (data: string) => {
    setOfficeLocation(data)
    props.getOfficeLocation(data)
  }
  const getJoiningDate = (data: string) => {
    setJoiningDate(data)
    props.getJoiningDate(data)
  }
  const getResignationDate = (data: string) => {
    setResignationDate(data)
    props.getResignationDate(data)
  }
  const getNoticePeriod = (data: string) => {
    setNoticePeriod(data)
    props.getNoticePeriod(data)
  }
  const getReportTo = (data: string) => {
    setReportTo(data)
    props.getReportTo(data)
  }

  return (
    <>
      <Row justify="space-between">
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getBusinessUnit}
            label={'Business Unit'}
            name="Business Unit"
            type="text"
            value={businessUnit?businessUnit:''}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getDepartment}
            label={'Department'}
            name="Department"
            type="text"
            value={department?department:''}
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
            value={designation?designation:''}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={12}>
          <TextFieldNoSuffix
            onUserInput={getReportTo}
            label={'Report to'}
            name="Report to"
            type="text"
            value={reportTo?reportTo:''}
          />
        </Col>
      </Row>

      <>
        <Row justify="space-between">
          <Col span={12}>
            <TextFieldNoSuffix
              onUserInput={getEmployeeStatus}
              label="Employment Status"
              name="Employment Status"
              type="text"
              value={employeeStatus?employeeStatus:''}
            />
          </Col>

          <Col span={1}></Col>
          <Col span={12}>
            <TextFieldNoSuffix
              onUserInput={getEmployeeType}
              label="Employee Type"
              name="Employee Type"
              type="text"
              value={employeeType?employeeType:''}
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
              value={officeLocation?officeLocation:''}
            />
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <TextFieldNoSuffix
              onUserInput={getJoiningDate}
              label="Joining Date"
              name="Joining Date"
              type="text"
              value={joiningDate?joiningDate:''}
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
              value={noticePeriod?noticePeriod:''}
            />
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <TextFieldNoSuffix
              onUserInput={getResignationDate}
              label="Resignation Date"
              name="Resignation Date"
              type="text"
              value={resignationDate?resignationDate:''}
            />
          </Col>
        </Row>
      </>
    </>
  )
}

export { EditEmployeeIntern }
