/* eslint-disable @typescript-eslint/no-unused-vars */
import createAccountstyles from './createAccount.module.less'
import { Checkbox, Divider} from 'antd'
import TextField from '../components/textField/textField'
import { useState } from 'react'
import createAccountApi from './api'
import CycButton from '../components/cycButton/cycButton'

const CreateAccount = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

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

    const createAccount = async() => {
        const response = await createAccountApi(name,email,mobileNumber,password)
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
                />
                <TextField
                onUserInput={getEmail}
                label="Email Address"
                name="email"
                type="text"
                img={'./assets/email.svg'}
                />
                 <TextField
                onUserInput={getMobileNumber}
                label="Mobile Number"
                name="mobileNumber"
                type="text"
                img={'./assets/phoneNumber.svg'}
                />
                 <TextField
                onUserInput={getPassword}
                label="Password"
                name="password"
                type="password"
                img={'./assets/eyeopen.svg'}
                />
                 <TextField
                onUserInput={getConfirmPassword}
                label="Confirm Password"
                name="password"
                type="password"
                img={'./assets/eyeopen.svg'}
                />
               
                <div className={createAccountstyles.flexcont}>
                    <div>
                        <Checkbox>
                            <p className={createAccountstyles.checkbox}> 
                                I agree to the 
                                <span className={createAccountstyles.terms}>  
                                 terms & conditions 
                                </span>
                            </p>
                        </Checkbox>
                    </div>
                </div>
               <CycButton value="CONTINUE" disabled={true} />
                {/* <input type="Button" className={createAccountstyles.continueButton} value="CONTINUE" onClick={createAccount}/> */}
                <p className={createAccountstyles.loginPara}>Already  have an account?</p>
                <div>
                    <p className={createAccountstyles.gotoLogin}>Login  <img src="/assets/greenarrow.svg" alt=""/> </p>
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
