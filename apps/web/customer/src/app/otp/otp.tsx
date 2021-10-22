import { useState } from 'react'
import Timer from '../components/timer/timer'
import globalStyles from '../app.module.less'
import otpstyles from './otp.module.less'
import CycButton from '../components/cyc-button/cyc-button'
import { useHistory, useLocation } from 'react-router-dom'
import {otpToserverApi, getAccessToken} from './api'
import OtpFields from './otp-fields'

const Otp = () => {
  const history = useHistory()
  const location = useLocation()
  console.log(location.state)
  const [otp, setOtp] = useState('')
  const getOtp = (otpValue:string) => {
    setOtp(otpValue)
  }
  const email = localStorage.getItem('email')
  const otpToserver = async() => {
    console.log(otp)
    const response = await otpToserverApi(email,otp)
    
    if(response.success){
      const response = await getAccessToken(location.state)
      console.log(response)
      localStorage.setItem("Token",response.data)
      history.push('/createOrganization')
    }
    
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
            <p className={globalStyles.formcontent}>Just A Moment </p>
            <p className={globalStyles.cyccontent}>
              Please enter the 6-digit code sent to your registered Email.
            </p>
            <p className={otpstyles.userMail}>
              {email}
              <input type="Button" className={otpstyles.editButton} value="EDIT" />
            </p>
            <div >
            <div className={otpstyles.otpWrapper}>
            <OtpFields isAutoFocus length={6} onChangeOtp={(otp: string) => getOtp(otp)}/>
            </div>
            </div>
            

            <div className={otpstyles.otpGuide}>
              <p className={otpstyles.otpContent}>Resend Code in</p>
              <img src="./assets/clock.svg" className={otpstyles.clock} alt="" />
              <p className={otpstyles.time} id="countdown">
                <Timer />
              </p>
            </div>
            <CycButton value="VERIFY" disabled={otp.length !== 6} onClick={otpToserver}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Otp
