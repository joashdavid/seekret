/* eslint-disable max-lines */
import { useState } from 'react'
import { Breadcrumb, Divider, Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'

import contactFormStyles from './create.module.less'
import { TextFieldNoSuffix } from '../../../components/text-field-nosuffix'
import { TextArea } from '../../../components/text-area'
import CycButton from '../../../components/cyc-button/cyc-button'
import { createContactApi } from '../individual/api'
// import { store } from '../../../store'

const CreateContact = () => {
  const [fullName, setfullName] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [bank, setBank] = useState('')
  const [accountNumber, setAcnumber] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [swift, setSwift] = useState('')
  const [bankAddress, setBankaddress] = useState('')
  const [roles, setRoles] = useState('')

  const history = useHistory()
  const getFullname = (data: string) => {
    setfullName(data)
  }
  const getphoneNumber = (data: string) => {
    setphoneNumber(data)
  }
  const getEmail = (data: string) => {
    setEmail(data)
  }
  const getAddress = (data: string) => {
    setAddress(data)
  }
  const getCountry = (data: string) => {
    setCountry(data)
  }
  const getState = (data: string) => {
    setState(data)
  }
  const getPincode = (data: string) => {
    setPincode(data)
  }
  const getCity = (data: string) => {
    setCity(data)
  }
  const getBank = (data: string) => {
    setBank(data)
  }
  const getAccountNumber = (data: string) => {
    setAcnumber(data)
  }
  const getIfsc = (data: string) => {
    setIfsc(data)
  }
  const getSwift = (data: string) => {
    setSwift(data)
  }
  const getBankaddress = (data: string) => {
    setBankaddress(data)
  }
  const getRoles = (data: string) => {
    setRoles(data)
  }
  const getDetails = async () => {
    const response = await createContactApi(
      fullName,
      phoneNumber,
      email,
      address,
      country,
      state,
      pincode,
      city,
      bank,
      accountNumber,
      ifsc,
      swift,
      bankAddress,
    )
    if(response.success){
      history.push('/dashboard/manageContact')
      clearForm()
    }
    
  }
  const clearForm = () => {
    setfullName("")
    setphoneNumber("")
    setEmail("")
    setAddress("")
    setCountry("")
    setState("")
    setPincode("")
    setCity("")
    setBank("")
    setAcnumber("")
    setIfsc("")
    setSwift("")
    setBankaddress("")
    setRoles("")
    
  }
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Add. Contact</Breadcrumb.Item>
      </Breadcrumb>

      <Divider style={{ margin: '15px 0 0 0' }} />
      <Row>
        <Col span={24}>
          <span className={contactFormStyles.formContent}>
            Select the type of contact you want to add{' '}
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={9}>
          <div className={contactFormStyles.contactWrapper}>
            <div className={contactFormStyles.contactChoiceContent}>
              <div className={contactFormStyles.contactImg}>
                <img src="../assets/IndividualIcon.svg" alt="" className={contactFormStyles.icon} />
                <div className={contactFormStyles.contactDesInfo}>
                  <p className={contactFormStyles.contactType}>Individual</p>
                </div>
                <p className={contactFormStyles.insideImage}>
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do .
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className={contactFormStyles.contactWrapper} style={{ marginLeft: '-18vh' }}>
            <div className={contactFormStyles.contactChoiceContent}>
              <div className={contactFormStyles.contactImg}>
                <img
                  src="../assets/company-contact.svg"
                  className={contactFormStyles.icon}
                  alt=""
                />
                <div className={contactFormStyles.contactDesInfo}>
                  <p className={contactFormStyles.contactType}>Company</p>
                </div>
                <p className={contactFormStyles.insideImage}>
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do .
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={{ margin: '10px 0 0 0' }} />
      <Row>
        <Col span={9}>
          <span className={contactFormStyles.formContent}>
            1. Fill in the personal details of the individual
          </span>
          <Row>
            <Col span={6}>
              <div className={contactFormStyles.dpUpload}>
                <img
                  src="../assets/upload-logo.svg"
                  alt=""
                  className={contactFormStyles.uploadImage}
                />
                <p className={contactFormStyles.uploadContent}>Upload Photo</p>
              </div>
            </Col>
            <Col span={12}>
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getFullname}
                  label="Full name"
                  name="fullname"
                  type="text"
                  value={fullName}
                />
              </Col>
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getphoneNumber}
                  label="Mobile number"
                  name="mobileNumber"
                  type="text"
                  value={phoneNumber}
                />
              </Col>
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getEmail}
                  label="Email"
                  name="email"
                  type="text"
                  value={email}
                />
              </Col>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={18}>
              <TextArea
                onUserInput={getAddress}
                label="Address"
                name="address"
                type="text"
                value={address}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getCountry}
                label="Country"
                name="country"
                type="text"
                value={country}
              />
            </Col>
            <Col span={2} />

            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getState}
                label="State"
                name="state"
                type="text"
                value={state}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getPincode}
                label="Pincode"
                name="pincode"
                type="text"
                value={pincode}
              />
            </Col>
            <Col span={2} />
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getCity}
                label="City"
                name="city"
                type="text"
                value={city}
              />
            </Col>
          </Row>
        </Col>
        <Col span={9}>
          <span className={contactFormStyles.formContent}>2. Fill bank account details</span>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getBank}
                label="Bank"
                name="bank"
                type="text"
                value={bank}
              />
            </Col>
            <Col span={2} />
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getAccountNumber}
                label="Account number"
                name="account"
                type="text"
                value={accountNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getIfsc}
                label="IFSC code"
                name="email"
                type="text"
                value={ifsc}
              />
            </Col>
            <Col span={2} />
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getSwift}
                label="Swift"
                name="swift"
                type="text"
                value={swift}
              />
            </Col>
          </Row>
          <Row>
            <Col span={18}>
              <TextArea
                onUserInput={getBankaddress}
                label="Bank Address"
                name="bankAddress"
                type="text"
                value={bankAddress}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className={contactFormStyles.formContent}>3.Assign Role</span>{' '}
            </Col>

            <Col span={18}>
              <TextFieldNoSuffix
                onUserInput={getRoles}
                label="Roles"
                name="roles"
                type="text"
                value={roles}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <CycButton value="SAVE AND CONTINUE" disabled={false} onClick={getDetails} />
      <Row></Row>
    </>
  )
}

export { CreateContact }
