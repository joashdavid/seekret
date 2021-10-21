import createAccountstyles from './create-account.module.less'
import { Checkbox, Divider} from 'antd'
import TextField from '../components/text-field/text-field'
import { useState, useEffect } from 'react'
import createAccountApi from './api'
import CycButton from '../components/cyc-button/cyc-button'
import validate from './validation'
import {Link, useHistory} from 'react-router-dom'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const CreateAccount = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [isAgreed, setisAgreed] = useState(true)
    const [errorIn, setErrorIn] = useState("")
    const [isUserCreated , setIsUserCreated] = useState(false)
    const history = useHistory()

    useEffect(() => {
      setErrorIn(validate(name,email,mobileNumber,password,confirmPassword,isAgreed))
    }
    ,[name,email,mobileNumber,password,confirmPassword,isAgreed]
    )

    const getFullName = (data:string) => {
      setname(data)
    }
    const getEmail = (data:string) => {
      setemail(data)
    }
    const getMobileNumber = (data:string) => {
      setmobileNumber(data)

    }
    const getPassword = (data:string) => {
      setpassword(data)
    }
    const getConfirmPassword = (data:string) => {
      setconfirmPassword(data)
    }

    const getAgree = (event:CheckboxChangeEvent) => {
      setisAgreed(event.target.checked)
    }

    const createAccount = async() => {
        const response = await createAccountApi(name,email,mobileNumber,password)
        localStorage.setItem("email",email)
        console.log(response)
        if(response.sucess){
          setIsUserCreated(response.sucess)
        }  
    }

    if(isUserCreated){
      history.push('/otp',{email})
    }

    return(
        <div className={createAccountstyles.containers}>
        <div className={createAccountstyles.flex}>
            <div className={createAccountstyles.wallpaper}>
            <img
            src="./assets/cyc-img.svg" className={createAccountstyles.wallpaper}
            alt=""
           />
           <p className={createAccountstyles.para1}>
           Welcome to  <span className={createAccountstyles.para2}>Cyclops</span>
           <p className={createAccountstyles.text}>
                Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore et dolore magna aliqua minim labore veniam. 
            </p>
           </p>
           <p className={createAccountstyles.content}></p>
            </div>
            <div className={createAccountstyles.loginform}>
                <div className={createAccountstyles.formheader}>
                
                <p className={createAccountstyles.formcontent}> Create Account </p>
                <p className={createAccountstyles.cyccontent}>
                Let’s get you started on Cyclops.
                </p>
                <TextField
                onUserInput={getFullName}
                label="Full Name"
                name="Full Name"
                type="text"
                img={'./assets/fullname.svg'}
                value ={name}
                />
                <TextField
                onUserInput={getEmail}
                label="Email Address"
                name="email"
                type="text"
                img={'./assets/email.svg'}
                value = {email}
                />
                <div className={createAccountstyles.phoneNumberWrapper}>
                  <div className = {createAccountstyles.phoneCode}>
                    <img src="./assets/india.png" className={createAccountstyles.flag} alt=''></img> 
                    <p>+91</p>
                    <img src='./assets/drop-down-down-black.svg'className={createAccountstyles.dropdown} alt=''></img>
                  </div>
                  <TextField
                onUserInput={getMobileNumber}
                label="Mobile Number"
                name="mobileNumber"
                type="number"
                img={'./assets/phoneNumber.svg'}
                value = {mobileNumber}
                />
                </div>
                 
                 <TextField
                onUserInput={getPassword}
                label="Password"
                name="password"
                type="password"
                img={'./assets/eyeopen.svg'}
                value = {password}
                />
                 <TextField
                onUserInput={getConfirmPassword}
                label="Confirm Password"
                name="password"
                type="password"
                img={'./assets/eyeopen.svg'}
                value = {confirmPassword}
                />
               
                <div className={createAccountstyles.flexcont}>
                    <div>
                        <Checkbox onChange={getAgree} checked={isAgreed}>
                            <p className={createAccountstyles.checkbox}> 
                                I agree to the  
                                <span className={createAccountstyles.terms}>  
                                  terms & conditions 
                                </span>
                            </p>
                        </Checkbox>
                    </div>
                </div>
               <CycButton value="CONTINUE" disabled={errorIn !== 'valid'} onClick={createAccount}/>
                <p className={createAccountstyles.loginPara}>Already  have an account?</p>
                <div>
                  <Link to="/">
                    <p className={createAccountstyles.gotoLogin}>Login  <img src="/assets/greenarrow.svg" alt=""/> </p>
                  </Link>
                </div>
                <Divider style={{height:0.4}}>
                    <p className={createAccountstyles.divider}>
                        OR SIGN UP WITH
                    </p>
                </Divider>
                
            </div>
            </div>
            </div>
            </div>
    )
}
export default CreateAccount
