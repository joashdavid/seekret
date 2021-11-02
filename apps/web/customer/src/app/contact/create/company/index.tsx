/* eslint-disable max-lines */
import { useState, useEffect } from 'react'
import { Divider, Row, Col, notification } from 'antd'

import { ContactModel } from '../../../../model/model'
import contactFormStyles from './create.module.less'
import { TextFieldNoSuffix } from '../../../components/text-field-nosuffix'
import { createCompanyContactApi, updateCompanyApi } from './api'
import CycButton from '../../../components/cyc-button/cyc-button'
import { useHistory } from 'react-router-dom'
import { DropDown } from '../../../components/dropdown'
import { getCountryListApi, getStateListApi } from '../../api'
import { BankDropdown } from '../../../components/dropdown-img/index'
import { TextArea } from '../../../components/text-area/index'
import { validate } from '../validation'
import { RoleDropdown } from '../../../components/role-dropdown'

const CreateCompanyContact = (props: { data: ContactModel | undefined }) => {
  const history = useHistory()
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [countryList, setCountryList] = useState([])
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [bank, setBank] = useState('')
  const [bankAccount, setbankAccount] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [swift, setSwift] = useState('')
  const [bankAddress, setBankaddress] = useState('')
  const [taxNumber, setTaxNumber] = useState('')
  const [panNumber, setPanNumber] = useState('')
  const [group, setRoles] = useState<string[]>([])
  const [stateList, setStateList] = useState([])
  const [contactId, setContactId] = useState('')
  const [isEdit, setIsedit] = useState(false)
  const [errorIn, setErrorIn] = useState('')
  // eslint-disable-next-line prefer-const

  useEffect(() => {
    const getCountryList = async () => {
      const response = await getCountryListApi()
      setCountryList(response.data)
    }
    getCountryList()
  }, [])
  useEffect(() => {
    setErrorIn(validate(companyName, email,phoneNumber ))
  }, [companyName, email, phoneNumber])
  useEffect(() => {
    if (props.data) {
      setCompanyName(props.data.contactName)
      setEmail(props.data.email)
      setphoneNumber(props.data.phoneNo)
      setAddress(props.data.address)
      setCountry(props.data.country)
      setState(props.data.state)
      setPincode(props.data.postcode)
      setCity(props.data.city)
      setBank(props.data.bankName)
      setbankAccount(props.data.bankAccount)
      setIfsc(props.data.ifsc)
      setSwift(props.data.swift)
      setContactId(props.data.contactId)
      // setRoles(props.data.group)
      setIsedit(true)
    }
  }, [props.data])

  const getCompanyName = (data: string) => {
    setCompanyName(data)
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
  const getbankAccount = (data: string) => {
    setbankAccount(data)
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
  const getTaxNumber = (data: string) => {
    setTaxNumber(data)
  }
  const getPanNumber = (data: string) => {
    setPanNumber(data)
  }
  const getRoles = (data: string[]) => {
    setRoles(data)
  }
  const getCompanyDetails = async () => {
    if(errorIn !== 'invalid'){
      if (!isEdit) {
        const response = await createCompanyContactApi(
          companyName,
          phoneNumber,
          email,
          address,
          country,
          state,
          pincode,
          city,
          bank,
          bankAccount,
          ifsc,
          swift,
          bankAddress,
          group
        )
        if (response.success) {
          history.push('/dashboard/manageContact')
          return
        }
      } else {
        const response = await updateCompanyApi(
          companyName,
          phoneNumber,
          email,
          address,
          country,
          state,
          pincode,
          city,
          bank,
          bankAccount,
          ifsc,
          swift,
          bankAddress,
          contactId,
          group
        )
        if (response.success) {
          history.push('/dashboard/manageContact')
          return
        }
      }
    }
    else{
      return pushNotification("INVALID CREDENTIALS",'Oops! Seems like Invalid Data!.Please enter valid information')
    }
    
  }
 const pushNotification = (message: string, description: string) => {
    notification.open({
      message: message,
      description: description,
      placement: 'bottomRight',
      duration: 3,
      className: 'notificationMessage',
    })
  }
  return (
    <>
      <Row style={{ marginTop: '1vh' }}>
        <Col span={9}>
          <span className={contactFormStyles.formContent}>1. Fill in Company Details</span>
          <Row style={{ marginTop: '1vh' }}>
            <Col span={19}>
              <TextFieldNoSuffix
                onUserInput={getCompanyName}
                label="Company Name*"
                name="companyName"
                type="text"
                value={companyName}
              />
            </Col>
          </Row>
          <Row>
            <Col span={9}>
              <TextFieldNoSuffix
                onUserInput={getphoneNumber}
                label="Mobile Number*"
                name="phoneNumber"
                type="number"
                value={phoneNumber}
              />
            </Col>
            <Col span={1} />
            <Col span={9}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Email*"
                name="email"
                type="text"
                value={email}
              />
            </Col>
          </Row>

          <Row>
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
          <Row style={{ marginTop: '1vh' }}>
            <Col span={9} className={contactFormStyles.bankDetails}>
              <BankDropdown onChange={getBank} label="Bank" value={bank} />
            </Col>
            <Col span={1} />
            <Col span={9}>
              <TextFieldNoSuffix
                onUserInput={getbankAccount}
                label="Account number"
                name="bankAccount"
                type="text"
                value={bankAccount}
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col span={9} className={contactFormStyles.bankDetails}>
              <TextFieldNoSuffix
                onUserInput={getIfsc}
                label="IFSC code"
                name="ifsc"
                type="text"
                value={ifsc}
              />{' '}
            </Col>
            <Col span={1} />
            <Col span={9}>
              <TextFieldNoSuffix
                onUserInput={getSwift}
                label="Swift"
                name="swift"
                type="text"
                value={swift}
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col span={19} className={contactFormStyles.bankDetails}>
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
            <Col span={9} className={contactFormStyles.bankDetails}>
              <TextFieldNoSuffix
                onUserInput={getTaxNumber}
                label="TAX Number"
                name="taxNumber"
                type="text"
                value={taxNumber}
              />{' '}
            </Col>
            <Col span={1} />
            <Col span={9}>
              <TextFieldNoSuffix
                onUserInput={getPanNumber}
                label="PAN Number"
                name="panNumber"
                type="text"
                value={panNumber}
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className={contactFormStyles.rightFormContent}>3. Assign Group </span>{' '}
            </Col>
            <Col span={19} className={contactFormStyles.bankDetails} style={{ marginTop: '1vh' }}>
            <RoleDropdown type='company' label={"Groups"} value={group} onChange={getRoles}/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <CycButton value="SAVE AND CONTINUE" disabled={false} onClick={getCompanyDetails} />
      <Row></Row>
    </>
  )
}
export { CreateCompanyContact }
