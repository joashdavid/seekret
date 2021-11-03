/* eslint-disable max-lines */
import { useEffect, useState } from 'react'
import { Divider, Row, Col, notification } from 'antd'
import { useHistory } from 'react-router-dom'

import contactFormStyles from './create.module.less'
import { ContactModel } from '../../../../model/model'
import { TextFieldNoSuffix } from '../../../components/text-field-nosuffix'
import CycButton from '../../../components/cyc-button/cyc-button'
import { createContactApi, updateContactApi } from '../individual/api'
import { DropDown } from '../../../components/dropdown'
import { getCountryListApi, getStateListApi } from '../../api'
import { BankDropdown } from '../../../components/dropdown-img/index'
import { TextArea } from '../../../components/text-area'
import { validate } from '../validation'
import { RoleDropdown } from '../../../components/role-dropdown'
// import { store } from '../../../store'

const CreateIndividualContact = (props: { data: ContactModel | undefined }) => {
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
  const [group, setgroup] = useState<number[]>([])
  const [countryList, setCountryList] = useState([])
  const [stateList, setStateList] = useState([])
  const [contactId, setContactId] = useState('')
  const [isEdit, setIsedit] = useState(false)
  const [errorIn, setErrorIn] = useState('')

  useEffect(() => {
    if (props.data) {
      setfullName(props.data.contactName)
      setEmail(props.data.email)
      setphoneNumber(props.data.phoneNo)
      setAddress(props.data.address)
      setCountry(props.data.country)
      setState(props.data.state)
      setPincode(props.data.postcode)
      setCity(props.data.city)
      setBank(props.data.bankName)
      setAcnumber(props.data.bankAccount)
      setIfsc(props.data.ifsc)
      setSwift(props.data.swift)
      setContactId(props.data.contactId)
      setgroup(props.data.groups)
      // setgroup(['1','2'])
      setIsedit(true)
    }
  }, [props.data])

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
  const getgroup = (data: number[]) => {
    setgroup(data)
  }
  const getDetails = async () => {
    if (errorIn !== 'invalid') {
      if (!isEdit) {
        console.log(group)
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
          group
        )
        if (response.success) {
          history.push('/dashboard/manageContact')
          clearForm()
          return
        }
      } else {
        const response = await updateContactApi(
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
          contactId,
          group
        )
        console.log(response)
        if (response.success) {
          history.push('/dashboard/manageContact')
          clearForm()
          return
        }
      }
    } else {
      return pushNotification(
        'INVALID CREDENTIALS',
        'Oops! Seems like Invalid Data!.Please enter valid information'
      )
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

  useEffect(() => {
    setErrorIn(validate(fullName, email, phoneNumber))
  }, [fullName, email, phoneNumber])

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
    setgroup([])
  }
  return (
    <>
     <Row style={{ marginTop: '1vh' }}>
        <Col span={9}>
          <span className={contactFormStyles.formContent}>
            1. Fill in the personal details of the individual
          </span>
          <Row style={{ marginTop: '1vh' }}>
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
            <Col span={13} style={{ marginLeft: '1.5vh' }}>
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getFullname}
                  label="Full name*"
                  name="fullname"
                  type="text"
                  value={fullName}
                />
              </Col>
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getphoneNumber}
                  label="Mobile number*"
                  name="mobileNumber"
                  type="text"
                  value={phoneNumber}
                />
              </Col>
              <Col span={24}>
                <TextFieldNoSuffix
                  onUserInput={getEmail}
                  label="Email*"
                  name="email"
                  type="text"
                  value={email}
                />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col span={20}>
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
            <Col span={10}>
              <DropDown list={countryList} value={country} label="Country" onChange={getCountry} />
            </Col>
            <Col span={1} />
            <Col span={10}>
              <DropDown list={stateList} value={state} label="State" onChange={getState} />
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <TextFieldNoSuffix
                onUserInput={getPincode}
                label="Pincode"
                name="pincode"
                type="text"
                value={pincode}
              />
            </Col>
            <Col span={1} />
            <Col span={10}>
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
        <Col span={9} style={{ marginLeft: '1vh' }}>
          <span className={contactFormStyles.rightFormContent} style={{ marginLeft: '1vh' }}>
            2. Fill bank account details
          </span>
          <Row>
            <Col span={10} style={{ marginTop: '1vh', marginLeft: '-11.5vh' }}>
              <BankDropdown onChange={getBank} label="Bank" value={bank} />
            </Col>
            <Col span={1} />
            <Col span={10} style={{ marginTop: '1vh' }}>
              <TextFieldNoSuffix
                onUserInput={getAccountNumber}
                label="Account number"
                name="acnumber"
                type="text"
                value={accountNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col span={10} style={{ marginLeft: '-11.5vh' }}>
              <TextFieldNoSuffix
                onUserInput={getIfsc}
                label="IFSC code"
                name="ifsc"
                type="text"
                value={ifsc}
              />
            </Col>
            <Col span={1} />
            <Col span={10}>
              <TextFieldNoSuffix
                onUserInput={getSwift}
                label="Swift"
                name="swift"
                type="text"
                value={swift}
              />
            </Col>
          </Row>
          <Row className={contactFormStyles.rightForm}>
            <Col span={20} style={{ marginLeft: '-11.5vh' }}>
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
            <Col
              className={contactFormStyles.rightFormContent}
              style={{ marginLeft: '-11.5vh' }}
              span={24}
            >
              <span style={{ marginLeft: '-1vh' }}>3. Assign Group </span>
            </Col>
            <Col span={20} style={{ marginLeft: '-11.5vh', marginTop: '1vh' }}>
              <RoleDropdown type="individual" label={'Groups'} value={group} onChange={getgroup} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />
      <CycButton value="SAVE & CLOSE" disabled={false} onClick={getDetails} />
      <Row></Row>
    </>
  )
}

export { CreateIndividualContact }
