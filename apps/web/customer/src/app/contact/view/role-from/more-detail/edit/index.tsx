/* eslint-disable max-lines */
import { Col, Row, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { TextFieldNoSuffix } from '../../../../../components/text-field-nosuffix'
import CycButton from '../../../../../components/cyc-button/cyc-button'
import { updateClientApi } from '../api'
import { ContactDetailModel } from '../../../../../../model/model'
import { fetchClientDetailApi } from '../../api'

const MoreDetailsModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group: string
}) => {
  // const [employeeId, setEmployeId] = useState<string>('')
  const [dob, setDob] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [aadharNo, setAdharNo] = useState<string>('')
  const [bloodGroup, setbloodGroup] = useState<string>('')
  const [panNo, setPanNo] = useState<string>('')
  const [uanNo, setUanNo] = useState<string>('')
  const [emergencyContact, setEmergencyContact] = useState<string>('')
  const [emergencyContactNo, setEmergencyContactNo] = useState<string>('')
  const [gst, setGst] = useState<string>('')
  const [trnNo, setTrnNo] = useState<string>('')
  const [website, setWebsite] = useState<string>('')
  const [vendorStatus, setVendorStatus] = useState<string>('')
  const [gstRegNo, setGstRegNo] = useState<string>('')
  const [gstRegType, setGstRegType] = useState<string>('')
  const [engType, setEngType] = useState<string>('')
  const [paymentTerms , setPaymentTerms] =  useState<string>('')
  const [currency ,setCurrency] = useState<string>('')
  // const [relationship, setRelationship] = useState<string>('')

  // useEffect(() => {
  //     fetchClient()
  // },[props])

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

  const getDob = (data: string) => {
    setDob(data)
  }
  const getGender = (data: string) => {
    setGender(data)
  }
  const getAadharNo = (data: string) => {
    setAdharNo(data)
  }
  const getBloodGroup = (data: string) => {
    setbloodGroup(data)
  }
  const getPanNo = (data: string) => {
    setPanNo(data)
  }
  const getUanNo = (data: string) => {
    setUanNo(data)
  }
  const getEmergencyContact = (data: string) => {
    setEmergencyContact(data)
  }
  const getEmergencyContactNo = (data: string) => {
    setEmergencyContactNo(data)
  }
  const getGst = (data: string) => {
    setGst(data)
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
      const response = await updateClientApi(
        props.orgId,
        props.data.contactId,
        // employeeId,
        dob,
        gender,
        aadharNo,
        bloodGroup,
        panNo,
        uanNo,
        emergencyContactNo,
        gst,
        website,
        gstRegNo,
        gstRegType,
        vendorStatus,
        paymentTerms,
        currency,
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
  if (props.group === 'Employee' || props.group === 'Intern' || props.group === 'Consultant') {
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
          {(props.group === 'Employee' || props.group === 'Intern') && (
            <Col span={12}>
              <TextFieldNoSuffix
                onUserInput={getAadharNo}
                label="Aadhar No."
                name="employeeId"
                type="text"
                value={aadharNo}
              />
            </Col>
          )}
          {props.group === 'Consultant' && (
            <Col span={12}>
              <TextFieldNoSuffix
                onUserInput={getGender}
                label="Gender"
                name="employeeId"
                type="text"
                value={gender}
              />
            </Col>
          )}

          <Col span={1}></Col>
          <Col span={12}>
            <TextFieldNoSuffix
              onUserInput={getDob}
              label="DOB"
              name="dob"
              type="text"
              value={dob}
            />
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={12}>
            {(props.group === 'Employee' || props.group === 'Intern') && (
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getGender}
                  label="Gender"
                  name="employeeId"
                  type="text"
                  value={gender}
                />
              </Col>
            )}
            {props.group === 'Consultant' && (
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getGst}
                  label="GST"
                  name="GST"
                  type="text"
                  value={gst}
                />
              </Col>
            )}
          </Col>
          <Col span={1}></Col>
          {(props.group === 'Employee' || props.group === 'Intern') && (
            <Col span={12}>
              <TextFieldNoSuffix
                onUserInput={getBloodGroup}
                label="Blood Group"
                name="dob"
                type="text"
                value={bloodGroup}
              />
            </Col>
          )}
          {props.group === 'Consultant' && (
            <Col span={12}>
              <TextFieldNoSuffix
                onUserInput={getPanNo}
                label="Pan Card No."
                name="dob"
                type="text"
                value={panNo}
              />
            </Col>
          )}
        </Row>
        {(props.group === 'Employee' || props.group === 'Intern') && (
          <>
            <Row justify="space-between">
              <Col span={12}>
                <TextFieldNoSuffix
                  onUserInput={getUanNo}
                  label="UAN No."
                  name="employeeId"
                  type="text"
                  value={uanNo}
                />
              </Col>
              <Col span={1}></Col>
              <Col span={12}>
                <TextFieldNoSuffix
                  onUserInput={getPanNo}
                  label="Pan Card No."
                  name="dob"
                  type="text"
                  value={panNo}
                />
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={12}>
                <TextFieldNoSuffix
                  onUserInput={getEmergencyContactNo}
                  label="Emergency Contact Number"
                  name="employeeId"
                  type="text"
                  value={emergencyContactNo}
                />
              </Col>
              <Col span={1}></Col>
              <Col span={12}>
                <TextFieldNoSuffix
                  onUserInput={getEmergencyContact}
                  label="Emergency Contact Person"
                  name="dob"
                  type="text"
                  value={emergencyContact}
                />
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={1}></Col>
            </Row>
          </>
        )}
      </Modal>
    )
  } else if (props.group === 'Vendor' || props.group === 'Client') {
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
  } else {
    return <p></p>
  }
}
export { MoreDetailsModal }
