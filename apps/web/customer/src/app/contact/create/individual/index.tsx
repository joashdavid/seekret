/* eslint-disable max-lines */
import { useEffect, useState } from 'react'
import { Divider, Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'

import contactFormStyles from './create.module.less'
import { TextFieldNoSuffix } from '../../../components/text-field-nosuffix'
import CycButton from '../../../components/cyc-button/cyc-button'
import { TextArea } from '../../../components/text-area' 

import { createContactApi } from '../individual/api'
import { DropDown } from '../../../components/dropdown'
import { getCountryListApi, getStateListApi } from '../../api'
import { BankDropdown } from '../../../components/dropdown-img/index'
// import { store } from '../../../store'

const CreateIndividualContact = () => {
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
  const [countryList, setCountryList] = useState([])
  const [stateList, setStateList] = useState([])

  const history = useHistory()
  useEffect(() => {
    const getCountryList = async () => {
      const response = await getCountryListApi()
      setCountryList(response.data)
    }
    getCountryList()
  }, [])

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
  const getCountry = async (data: string) => {
    setCountry(data)
    const response = await getStateListApi(data)
    console.log(response.data)
    setStateList(response.data)
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
      bankAddress
    )
    if (response.success) {
      history.push('/dashboard/manageContact')
      clearForm()
    }
  }
  const clearForm = () => {
    setfullName('')
    setphoneNumber('')
    setEmail('')
    setAddress('')
    setCountry('')
    setState('')
    setPincode('')
    setCity('')
    setBank('')
    setAcnumber('')
    setIfsc('')
    setSwift('')
    setBankaddress('')
    setRoles('')
  }
  return (
    <>
       
      <Row>
        <Col span={9} >
          <span className={contactFormStyles.formContent}>
            1. Fill in the personal details of the individual
          </span>
          <Row style={{marginTop:"1vh"}}>
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
           
            <Col span={12} style={{marginLeft:"1.5vh"}}>
              
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
          <Row >
            <Col span={19}>
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
            <Col span={9}>
              {/* <TextFieldNoSuffix
                onUserInput={getCountry}
                label="Country"
                name="country"
                type="text"
                value={country}
              /> */}
              <DropDown list={countryList} value={country} label="Country" onChange={getCountry} />
            </Col>
            <Col span={1} />
            <Col span={9}>
              <DropDown list={stateList} value={state} label="State" onChange={getState} />
            </Col>
          </Row>
          <Row>
            <Col span={9}>
              <TextFieldNoSuffix
                onUserInput={getPincode}
                label="Pincode"
                name="pincode"
                type="text"
                value={pincode}
              />
            </Col>
            <Col span={1} />
            <Col span={9}>
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
          <span className={contactFormStyles.rightFormContent}>2. Fill bank account details</span>
          <Row className={contactFormStyles.bankDetails}>
          <Col span={8} style={{marginTop:"1vh"}}>
              <BankDropdown onChange={getBank} label="Bank" value={bank}/>
            </Col>
            <Col span={1}/>
            <Col span={8} style={{marginTop:"1vh"}}>
              <TextFieldNoSuffix
                onUserInput={getAccountNumber}
                label="Account number"
                name="acnumber"
                type="text"
                value={accountNumber}
              />{' '}
            </Col>
          </Row>
          <Row className={contactFormStyles.bankDetails}>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getIfsc}
                label="IFSC code"
                name="ifsc"
                type="text"
                value={ifsc}
              />{' '}
            </Col>
            <Col  span={1}/>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getSwift}
                label="Swift"
                name="swift"
                type="text"
                value={swift}
              />{' '}
            </Col>
          </Row>
          <Row className={contactFormStyles.bankDetails}>
            <Col span={17}>
              <TextArea
                onUserInput={getBankaddress}
                label="Bank Address"
                name="bankAddress"
                type="text"
                value={bankAddress}
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col span={24}><span className={contactFormStyles.rightFormContent}>
              3. Assign Role </span> </Col>
            <Col span={20} style={{marginTop:"1vh"}} className={contactFormStyles.bankDetails}>
              <TextFieldNoSuffix
                onUserInput={getSwift}
                label="Assign Role"
                name="swift"
                type="text"
                value={swift}
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

export { CreateIndividualContact }
