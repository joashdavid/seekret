import { Breadcrumb, Divider, Row, Col, Radio } from "antd"
import { useState,useEffect } from "react"
import { useLocation } from 'react-router-dom'

import { CreateCompanyContact } from "./company"
import contactFormStyles from './company/create.module.less'
import { CreateIndividualContact } from "./individual"
import { Routing } from "../routing"
import { ContactModel } from "../../../model/model"

const CreateContact = () => {
    const [isIndividualChecked, setIndividualChecked] = useState(false)
    const [isCompanyChecked, setCompanyChecked] = useState(false)
    const [individualData, setIndividualData] = useState<ContactModel|undefined>()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const location = useLocation<any>()

    const displayIndividual = () => {
        setIndividualChecked(true)
        setCompanyChecked(false)
    }
    const displayCompany= () => {
        setCompanyChecked(true)
        setIndividualChecked(false)
    }
    useEffect(() => {
      if(location.state){
        if(location.state.isIndividualChecked){
          displayIndividual()
          setIndividualData(location.state.data)
        }
        console.log(location.state)
      }
      }
      , [])
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
                  <Radio checked={isIndividualChecked} value="individual" onClick={displayIndividual}></Radio>
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
                <Radio checked={isCompanyChecked} value="company" onClick={displayCompany}></Radio>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={{ margin: '10px 0 0 0' }} />
      <Routing/>
      {isIndividualChecked && <CreateIndividualContact  data={individualData}/>}
      {isCompanyChecked && <CreateCompanyContact />}
      
    </>
  )
}

export { CreateContact }
