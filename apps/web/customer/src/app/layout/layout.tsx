import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import styles from './login.module.less'

const Login = () => {


//   const userLogin = async () => {
//     const dataToserver = {
//       email,
//       password,
//     }
//     if(isFormValid){
//         const response = await userLoginApi(dataToserver)
//         console.log(response)
//         localStorage.setItem("Token",response.data)
        
//         if (response.sucess) {
//            setIsUserLogged(true)
//         }
//     }
    
//   }


  
//   const getPassword = (data: string) => {
//     setpassword(data)
//   }
//   const getEmail = (data: string) => {
//     setemail(data)
//   }



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
      <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
            </Switch>
        </Router>
      </div>
     

    </div>
  )
}
export default Login
