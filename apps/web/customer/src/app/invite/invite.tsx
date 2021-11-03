import createAccountstyles from './invite.module.less'
import globalStyles from '../app.module.less'
import { Checkbox, Divider, Popover,notification } from 'antd'
import TextField from '../components/text-field/text-field'
import { useState, useEffect } from 'react'
import {createAccountApi,getAccessToken} from './api'
import CycButton from '../components/cyc-button/cyc-button'
import validate from './validation'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { GlobalRouterPath } from '../routing/constant/globalRoute'
import { CountryCode } from '../components/country-code-dropdown'

const Invite = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [countryCode, setcCountryCode] = useState('')
  const [mobileNumber, setmobileNumber] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [isAgreed, setisAgreed] = useState(true)
  const [errorIn, setErrorIn] = useState('')
  const history = useHistory()
  const location = useLocation<{email:string,mobileNumber:string,name:string,password:string}>()

  useEffect(() => {
    setErrorIn(validate(name, email, mobileNumber, password, confirmPassword, isAgreed))
  }, [name, email, mobileNumber, password, confirmPassword, isAgreed])
  useEffect(() => {
    if(location.state){
      setemail(location.state.email)
      setname(location.state.name)
      setmobileNumber(location.state.mobileNumber)
      setpassword(location.state.password)
      setconfirmPassword(location.state.password)

    }
  },
  [])

  const getFullName = (data: string) => {
    setname(data)
  }
  const getEmail = (data: string) => {
    setemail(data)
  }
  const getCode = (data: string) => {
    setcCountryCode(data)
  }
  const getMobileNumber = (data: string) => {
    setmobileNumber(data)
  }
  const getPassword = (data: string) => {
    setpassword(data)
  }
  const getConfirmPassword = (data: string) => {
    setconfirmPassword(data)
  }

  const getAgree = (event: CheckboxChangeEvent) => {
    setisAgreed(event.target.checked)
  }
  const content = (
    <div className={createAccountstyles.popmessage}>
      <span>Your number will be helpful to receive notifications and alerts.</span>
    </div>
  )
  const createAccount = async () => {
    if(errorIn === "none"){
      const response = await createAccountApi(name, email,countryCode, mobileNumber, password)
      if (response.success) {
        const getToken = await getAccessToken({email,password})
        console.log(getToken.data)
        localStorage.setItem("Token",getToken.data)
        history.push(GlobalRouterPath.DASHBOARD, { name, email, mobileNumber,password })
        return 
      }else{
        return pushNotification("INVALID CREDENTIALS",'Oops! Seems like Invalid Data!.Please enter valid information')
    }
    }
    else{
      return pushNotification("INVALID CREDENTIALS",'Oops! Seems like Invalid Data!.Please enter valid data')
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
    <div className={globalStyles.containers}>
      <div className={globalStyles.flex}>
        <div className={globalStyles.wallpaper}>
          <img src="./assets/cyc-img.svg" className={globalStyles.wallpaper} alt="" />
          <p className={globalStyles.para1}>
            Welcome to <span className={globalStyles.para2}>Cyclops</span>
            <p className={globalStyles.text}>
              Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod tempor incididunt
              ut labore et dolore magna aliqua minim labore veniam.
            </p>
          </p>
          <p className={globalStyles.content}></p>
        </div>
        <div className={globalStyles.formStructure}>
          <div className={globalStyles.formheader}>
            <p className={globalStyles.formcontent}> Create Account </p>
            <p className={globalStyles.cyccontent}>Let’s get you started on Cyclops.</p>
            <TextField
              onUserInput={getFullName}
              label="Full Name"
              name="Full Name"
              type="text"
              img={'./assets/fullname.svg'}
              value={name}
            />
            <TextField
              onUserInput={getEmail}
              label="Email Address"
              name="email"
              type="text"
              img={'./assets/email.svg'}
              value={email}
            />
            <div className={createAccountstyles.phoneNumberWrapper}>
              <div className={createAccountstyles.phoneCode}>
                <CountryCode onChange={getCode} value={countryCode} />
              </div>
              <TextField
                onUserInput={getMobileNumber}
                label="Mobile Number"
                name="mobileNumber"
                type="number"
                img={'./assets/phoneNumber.svg'}
                value={mobileNumber}
              />
              <Popover content={content} className={createAccountstyles.popOver} placement="bottom">
                <img src="./assets/i.svg" className={createAccountstyles.mobileIcon} alt="" />
              </Popover>
            </div>

            <TextField
              onUserInput={getPassword}
              label="Password"
              name="password"
              type="password"
              img={'./assets/eyeopen.svg'}
              value={password}
            />
            <TextField
              onUserInput={getConfirmPassword}
              label="Confirm Password"
              name="password"
              type="password"
              img={'./assets/eyeopen.svg'}
              value={confirmPassword}
            />

            <div className={createAccountstyles.flexcont}>
              <div>
                <Checkbox onChange={getAgree} checked={isAgreed}>
                  <p className={createAccountstyles.checkbox}>
                    I agree to the
                    <span className={createAccountstyles.terms}>terms & conditions</span>
                  </p>
                </Checkbox>
              </div>
            </div>
            <CycButton value="CONTINUE" disabled={errorIn !== 'none'} onClick={createAccount} />
            <p className={createAccountstyles.loginPara}>Already have an account?</p>
            <div>
              <Link to={GlobalRouterPath.LOGIN}>
                <p className={createAccountstyles.gotoLogin}>
                  Login <img src="/assets/greenarrow.svg" alt="" />{' '}
                </p>
              </Link>
            </div>
            <Divider style={{ height: 0.4 }}>
              <p className={createAccountstyles.divider}>OR SIGN UP WITH</p>
            </Divider>
          </div>
        </div>
      </div>
    </div>
  )
}
export  {Invite}
