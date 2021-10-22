import { useState } from 'react'
import styles from './text-field.module.less'
import FloatLabel from '../float-label/float-label'


const TextField = (props: { onUserInput: (arg0: string) => void; label: string; 
    name: string; type: string; img: string | undefined,value: string }) => {
    const [isViewPassword, setIsViewPassword] = useState(false)

    const getCurrentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(props.name === "mobileNumber"){
            console.log(formatPhoneNumber(event.target.value))
            props.onUserInput((event.target.value).replace(/[a-z@#$!^%*&={}<>~|?:;_`"',.[\]\\/]/g, ''))
        }
        else{
            props.onUserInput(event.target.value)
        }  
    }

    const changePasswordType = () => {
        setIsViewPassword(!isViewPassword)
    }
    const  formatPhoneNumber = (value:string) => {
  
        if (!value) return value
        const phoneNumber = value.replace(/[^\d]/g, "")
        const phoneNumberLength = phoneNumber.length
        if (phoneNumberLength < 4) return phoneNumber
      
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`
      }
    return (
        <FloatLabel label={props.label} name={props.name}  value={props.value}>
            <div className={props.name !== "mobileNumber"?styles.textfield:styles.phoneNumber}>
                <input type={isViewPassword ? "text": props.type} value={props.value}
                     className={props.name !== "mobileNumber"?styles.textfield:styles.phoneNumber} onInput={getCurrentInput}
                    spellCheck={false}
                    />
                {props.type === "password" ? 
                    <img src={isViewPassword ? "./assets/eyeclose.svg":"./assets/eyeopen.svg"} alt=""  className={`${styles.icon} ${styles.hover}`} onClick={changePasswordType} />
                    :<img src={props.img} alt=""  className={props.name !== "mobileNumber" ? styles.icon: styles.icons}/>
                }
                
            </div>
        </FloatLabel>
    )
}

export default TextField
