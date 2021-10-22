import globalStyles from '../app.module.less'
import styles from './login.module.less'
import { Checkbox, Divider } from 'antd'
import { useState, useEffect } from 'react'
import { userLoginApi } from './api'
import TextField from '../components/text-field/text-field'
import { validate } from './validation'
import  { Link, useHistory } from 'react-router-dom'
import CycButton from '../components/cyc-button/cyc-button'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [isFormValid, setFormValid] = useState(false)
  const history = useHistory()

  const userLogin = async () => {
    const dataToserver = {
      email,
      password,
    }
    if(isFormValid){
      console.log(dataToserver)
        const response = await userLoginApi(dataToserver)
        console.log(response)
        localStorage.setItem("Token",response.data)
        
        if (response.success) {
           history.push('/dashboard')
        }
    }
    
  }

  useEffect(() => {
    setFormValid(validate(email,password))
  },[email,password] )

  
  const getPassword = (data: string) => {
    setpassword(data)
  }
  const getEmail = (data: string) => {
    setemail(data)
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
            <p className={globalStyles.loginguide}>
              You’ve come to the right place, login or set up your account.
            </p>
            <form>
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
              <div>
                <Checkbox>
                  <p className={styles.checkbox}> Remember me </p>
                </Checkbox>
              </div>

              <div>
                <p className={styles.password}>Forgot Password?</p>
              </div>
            </div>
            <CycButton value="LOGIN" disabled={false} onClick={userLogin}/>
            </form>
            <p className={styles.createaccount}>Don’t have an account?</p>
            <div>
                <Link to="/createAccount">
                    <span className={styles.newaccount}>
                        Create New <img src="/assets/greenarrow.svg" alt="" />{' '}
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
