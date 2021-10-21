import styles from './login.module.less'
import { Checkbox, Divider } from 'antd'
import { useState, useEffect } from 'react'
import { userLoginApi } from './api'
import TextField from '../components/text-field/text-field'
import { validate } from './validation'
import  { Link, useHistory } from 'react-router-dom'

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
    <div className={styles.flex}>
      <div className={styles.wallpaper}>
        <img src="./assets/cyc-img.svg" className={styles.wallpaper} alt="" />
        <p className={styles.para1}>
          Welcome to <span className={styles.para2}>Cyclops</span>
          <p className={styles.text}>
            Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod tempor incididunt ut
            labore et dolore magna aliqua minim labore veniam.
          </p>
        </p>
        <p className={styles.content}></p>
      </div>

        <div className={styles.loginform}>
          <div className={styles.formheader}>
            <img src="./assets/Cyclops.svg" className={styles.formImage} alt="" />
            <p className={styles.formcontent}>Let’s get started!</p>
            <p className={styles.loginguide}>
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
            <input type="Button" className={styles.loginbutton} value="LOGIN" onClick={userLogin} />
            </form>
            <p className={styles.createaccount}>Don’t have an account?</p>
            <div>
                <Link to="/createAccount">
                    <p className={styles.newaccount}>
                        Create New <img src="/assets/greenarrow.svg" alt="" />{' '}
                    </p>
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
