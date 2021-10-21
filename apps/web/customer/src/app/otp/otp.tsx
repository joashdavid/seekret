import { useState } from 'react'
import Timer from '../components/timer/timer'
import otpstyles from './otp.module.less'
import CycButton from '../components/cyc-button/cyc-button'
import { useHistory, useLocation } from 'react-router-dom'
import otpToserverApi from './api'

const Otp = () => {
  const history = useHistory()
  const location = useLocation()
  console.log(location.state)
  const [otp, setOtp] = useState('')
  const getOtp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value)
  }
  const email = localStorage.getItem('email')
  const otpToserver = async() => {
    console.log(otp)
    const response = await otpToserverApi(email,otp)
    console.log(response)
    if(response.sucess){
      history.push('/createOrganization')
    }
    
  }
    


  return (
    <div className={otpstyles.containers}>
      <div className={otpstyles.flex}>
        <div className={otpstyles.wallpaper}>
          <img src="./assets/cyc-img.svg" className={otpstyles.wallpaper} alt="" />
          <p className={otpstyles.para1}>
            Welcome to <span className={otpstyles.para2}>Cyclops</span>
            <p className={otpstyles.text}>
              Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod tempor incididunt
              ut labore et dolore magna aliqua minim labore veniam.
            </p>
          </p>
          <p className={otpstyles.content}></p>
        </div>
        <div className={otpstyles.loginform}>
          <div className={otpstyles.formheader}>
            <p className={otpstyles.formcontent}>Just A Moment </p>
            <p className={otpstyles.cyccontent}>
              Please enter the 6-digit code sent to your registered Email.
            </p>
            <p className={otpstyles.userMail}>
              {email}
              <input type="Button" className={otpstyles.editButton} value="EDIT" />
            </p>
            <div >
            <div className={otpstyles.otpWrapper}>
              <input
                type="number"
                className={otpstyles.otpFields}
                maxLength={6}
                onChange={getOtp}
              />
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
