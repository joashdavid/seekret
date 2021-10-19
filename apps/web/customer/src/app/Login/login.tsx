import styles from './login.module.less'
import { Checkbox, Divider} from 'antd'
import FloatLabel from '../components/FloatLabel/floatLabel'
import { useState } from 'react'
import {userLoginApi  } from './api'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [isLoggedIn , setLoggedIn] = useState(false)

    const userLogin = async() => {
        const dataToserver = {
            email: email,
            password
        }
        const response = await userLoginApi(dataToserver)
        if(response.success){
            setLoggedIn(true)
        }
    }

    // const userLogout = async () => {
    //     const response = await userLogoutApi()
    //     console.log(response)
    // }

    return(
        <div className={styles.flex}>
            <div className={styles.wallpaper}>
            <img
            src="./assets/cyc-img.svg" className={styles.wallpaper}
            alt=""
           />
           <p className={styles.para1}>
           Welcome to  <span className={styles.para2}>Cyclops</span>
           <p className={styles.text}>
                Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore et dolore magna aliqua minim labore veniam. 
               </p>
           </p>
           <p className={styles.content}></p>
            </div>
             <div className={styles.loginform}>
                <div className={styles.formheader}>
                <img
                src="./assets/Cyclops.svg"
                alt=""
                />
                <p className={styles.formcontent}> Let’s get started! </p>
                <p className={styles.loginguide}>
                You’ve come to the right place, login or set up your account.
                </p>
                
               
            <FloatLabel label="Email Address" name="email"  value={email}>
                <div className={styles.textfield}>
                    <input className={styles.textfield} value={email}
                        onChange={e=>setemail(e.target.value)}/>
                    <img src="./assets/email.svg" alt="" className={styles.icon}/>
                </div>
             </FloatLabel>
             
             <FloatLabel label="Password" name="password"  value={password}>
                <div className={styles.textfield}>
                    <input type="password" value={password} className={styles.textfield} onChange={e=>setpassword(e.target.value)}/>
                    <img src="./assets/eyeopen.svg" alt=""  className={styles.icon}/>
                </div>
             </FloatLabel>
                

                <div className={styles.flexcont}>
                    <div>
                        <Checkbox>
                            <p className={styles.checkbox}> Remember me </p>
                        </Checkbox>
                    </div>

                    <div>
                        <p className={styles.password}>Forgot Password?</p>
                    </div>
                </div>
                <input type="Button" className={styles.loginbutton} value="LOGIN" onClick={userLogin}/>
                     
                

                <p className={styles.createaccount}>Don’t have an account?</p>
                <div>
                    <p className={styles.newaccount}>Create New  <img src="/assets/greenarrow.svg" alt=""/> </p>
                </div>

                <Divider style={{height:0.4}}>
                    <p className={styles.divider}>
                        OR LOGIN WITH
                    </p>
                </Divider>
                </div>

                
            </div>
            {/* {isLoggedIn && <div>
                <input type="Button" className={styles.loginbutton} value="LOGOUT" onClick={userLogout}/>
                </div>} */}
            
            </div>
    )
}
export default Login
