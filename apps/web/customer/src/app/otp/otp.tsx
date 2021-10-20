/* eslint-disable @typescript-eslint/no-unused-vars */
import otpstyles from './otp.module.less'
import { Button, Checkbox, Divider, Space} from 'antd'
import { useState } from 'react'
import otpToserverApi from './api'
import { Redirect } from 'react-router'

const Otp = () => {
    const [otp ,setOtp] = useState('')
    const [isUserVerified, setIsUserVerified] = useState(false)
    
    const email = localStorage.getItem('email')
    const getOtp = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(event.target.value)
    }
 

    const otpToserver = async() => {
        const response = await otpToserverApi(email,otp)
        if (response.sucess){
            setIsUserVerified(true)
        }
    }
    if(isUserVerified){
        return <Redirect to="/dashboard"></Redirect>
    }
    return(
        <div className={otpstyles.containers}>
        <div className={otpstyles.flex}>
            <div className={otpstyles.wallpaper}>
            <img
            src="./assets/cyc-img.svg" className={otpstyles.wallpaper}
            alt=""
           />
           <p className={otpstyles.para1}>
           Welcome to  <span className={otpstyles.para2}>Cyclops</span>
           <p className={otpstyles.text}>
                Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore et dolore magna aliqua minim labore veniam. 
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
                <p className={otpstyles.userMail}>{email} <input type="Button" className={otpstyles.editButton} value="EDIT"/>
                </p> 
                <div className={otpstyles.otpWrapper}>
                <input type="number" className={otpstyles.otpFields} maxLength={6} onChange={getOtp}/>
                    {/* <div className={otpstyles.otpSingleField}>
                    <input type="text" className={otpstyles.otpFields} maxLength={1}/>
                    </div>
                    <div className={otpstyles.otpSingleField}>
                    <input type="text" className={otpstyles.otpFields} maxLength={1}/>
                    </div>
                    <div className={otpstyles.otpSingleField}>
                    <input type="text" className={otpstyles.otpFields} maxLength={1}/>
                    </div>
                    <div className={otpstyles.otpSingleField}>
                    <input type="text" className={otpstyles.otpFields} maxLength={1}/>
                    </div>
                    <div className={otpstyles.otpSingleField}>
                    <input type="text" className={otpstyles.otpFields} maxLength={1}/>
                    </div>
                    <div className={otpstyles.otpSingleField}>
                    <input type="text" className={otpstyles.otpFields} maxLength={1}/>
                    </div> */}
                </div>
                <div className={otpstyles.otpGuide}>
                    <p className={otpstyles.otpContent}>Resend Code in</p>
                    <img src="./assets/clock.svg" className={otpstyles.clock} alt=""/>
                    <p className={otpstyles.time} id="countdown">120s</p>
                </div>
                <input type="Button" className={otpstyles.verifybutton} value="VERIFY" onClick={otpToserver}/>                
            </div>
            </div>
            </div>
            </div>
    )
}
export default Otp
