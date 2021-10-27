/* eslint-disable max-lines */
import { useState } from 'react'
import { Breadcrumb, Divider, Row, Col } from 'antd'

import contactFormStyles from './create.module.less'
import { TextFieldNoSuffix } from '../../components/text-field-nosuffix'
import {TextArea} from '../../components/text-area'

const CreateContact = () => {
  const [fullName, setfullName] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const getFullname = (data: string) => {
    setfullName(data)
  }

  const getphoneNumber = (data: string) => {
    setphoneNumber(data)
  }

  const getEmail = (data: string) => {
    setEmail(data)
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

          <Row>
            <Col span={18}>
              <TextArea
                onUserInput={getEmail}
                label="Address"
                name="email"
                type="text"
                value={email}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Country"
                name="email"
                type="text"
                value={email}
              />
            </Col>
            <Col span={2} />

            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="State"
                name="email"
                type="text"
                value={email}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Pincode"
                name="email"
                type="text"
                value={email}
              />
            </Col>
            <Col span={2} />
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="City"
                name="email"
                type="text"
                value={email}
              />
            </Col>
          </Row>
        </Col>
        <Col span={9}>
          <span className={contactFormStyles.formContent}>2. Fill bank account details</span>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Bank"
                name="email"
                type="text"
                value={email}
              />{' '}
            </Col>
            <Col span={2}/>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Account number"
                name="email"
                type="text"
                value={email}
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="IFSC code"
                name="email"
                type="text"
                value={email}
              />{' '}
            </Col>
            <Col  span={2}/>
            <Col span={8}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Swift"
                name="email"
                type="text"
                value={email}
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col span={18}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Bank Address"
                name="email"
                type="text"
                value={email}
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col span={24}>Assign Role Header </Col>

            <Col span={18}>
              <TextFieldNoSuffix
                onUserInput={getEmail}
                label="Roles"
                name="email"
                type="text"
                value={email}
              />{' '}
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row></Row>
    </>
  )
}

export { CreateContact }
