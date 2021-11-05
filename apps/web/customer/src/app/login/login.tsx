import { Link, useHistory } from 'react-router-dom'
import { Checkbox, Divider, notification } from 'antd'
import { useState, useEffect } from 'react'

import globalStyles from '../app.module.less'
import styles from './login.module.less'
import { userLoginApi, resendOtpApi } from './api'
import TextField from '../components/text-field/text-field'
import { validate } from './validation'
import CycButton from '../components/cyc-button/cyc-button'
import { GlobalRouterPath } from '../routing/constant/globalRoute'
import { storeInBrowser } from './utils'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
// import { TextFieldAnt } from '../components/text-field-ant'
// import TextFieldD from '../components/dummy-text/text-field'

const Login = () => {
  // const [form] = Form.useForm()
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [isFormValid, setFormValid] = useState<boolean>(false)
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false)
  const history = useHistory()
  useEffect(() => {
    setFormValid(validate(email, password))
  }, [email, password])
  const userLogin = async () => {
    const dataToserver = {
      email,
      password,
    }

    if (isFormValid) {
      console.log(dataToserver)
      const response = await userLoginApi(dataToserver)
      if (response.success) {
        if (response.msg === 'New or unverified user') {
          redirectToOtp()
          return
        }
        if (response.msg === 'No organization associated to the user found') {
          storeInBrowser('Token', response.data)
          history.push('/createOrganization')
          return
        }
        storeInBrowser('Token', response.data)
        history.push(GlobalRouterPath.MANAGEORG)
      } else {
        return pushNotification(
          'INVALID CREDENTILAS',
          'Oops! Seems like Invalid Data!.Please enter valid information'
        )
      }
    } else {
      return pushNotification(
        'INVALID CREDENTILAS',
        'Oops! Seems like Invalid Data!.Please enter valid information'
      )
    }
  }

  const getPassword = (data: string) => {
    setpassword(data)
  }
  const getEmail = (data: string) => {
    setemail(data)
  }
  const getIsrembemerMe = (event: CheckboxChangeEvent) => {
    setIsRememberMe(event.target.checked)
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

  const redirectToOtp = async () => {
    const responseFromServer = await resendOtpApi(email)
    if (responseFromServer.success) {
      history.push(GlobalRouterPath.OTP, { email, password })
      return
    }
  }

  return (
    <div className={globalStyles.flex}>
      <div className={globalStyles.wallpaper}>
        <img src="./assets/cyc-img.svg" className={globalStyles.wallpaper} alt="" />
        <p className={globalStyles.para1}>
          Welcome to <span className={globalStyles.para2}>Cyclops</span>
          <p className={globalStyles.text}>
            Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod tempor incididunt ut
            labore et dolore magna aliqua minim labore veniam.
          </p>
        </p>
        <p className={globalStyles.content}></p>
      </div>

      <div className={globalStyles.formStructure}>
        <div className={globalStyles.formheader}>
          <img src="./assets/Cyclops.svg" className={globalStyles.formImage} alt="" />
          <p className={globalStyles.formcontent}>Let’s get started!</p>
          <p className={globalStyles.userGuide}>
            You’ve come to the right place, login or set up your account.
          </p>
          {/* <Form form={form} name="basic" initialValues={{ remember: true }} autoComplete="off" onFinish={getData}> */}

          <TextField
            onUserInput={getEmail}
            label="Email"
            name="email"
            type="text"
            img={'./assets/email.svg'}
            value={email}
          />
          <TextField
            onUserInput={getPassword}
            label="Password"
            name="password"
            type="password"
            img={'./assets/eyeopen.svg'}
            value={password}
          />

          <div className={styles.flexcont}>
            {/* <Form.Item> */}
            <div>
              <Checkbox onChange={getIsrembemerMe} value={isRememberMe}>
                <p className={styles.checkbox}> Remember me </p>
              </Checkbox>
            </div>
            {/* </Form.Item> */}

            <div>
              <p className={styles.password}>Forgot Password?</p>
            </div>
          </div>
          {/* <Button type="primary" htmlType="submit">
              LOGIN
            </Button> */}
          <CycButton value="LOGIN" disabled={false} onClick={userLogin} />
          {/* </Form> */}
          <p className={styles.createaccount}>Don’t have an account?</p>
          <div>
            <Link to={GlobalRouterPath.CREATE_ACCOUNT}>
              <span className={globalStyles.newaccount}>
                Create New <img src="/assets/greenarrow.svg" alt="" />
              </span>
            </Link>
          </div>

          <Divider style={{ height: 0.4 }}>
            <p className={styles.divider}>OR LOGIN WITH</p>
          </Divider>
        </div>
      </div>
    </div>
  )
}
export default Login
