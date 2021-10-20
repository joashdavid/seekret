import { useState } from 'react'
import styles from './textField.module.less'
import FloatLabel from '../floatLabel/floatLabel'


const TextField = (props: { onUserInput: (arg0: string) => void; label: string; 
    name: string; type: string; img: string | undefined,value: string }) => {
    // const [currentInput, setCurrentInput] = useState('')
    const [isViewPassword, setIsViewPassword] = useState(false)

    const getCurrentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setCurrentInput(event.target.value)
        if(props.name === "mobileNumber"){
            props.onUserInput((event.target.value).replace(/[a-z@#$!^%*&={}<>~|?:;_`"',.[\]\\/]/g, ''))
            
        }
        else{
            props.onUserInput(event.target.value)
        }
        
    }

    const changePasswordType = () => {
        setIsViewPassword(!isViewPassword)
    }
    return (
        <FloatLabel label={props.label} name={props.name}  value={props.value}>
            <div className={props.name !== "mobileNumber"?styles.textfield:styles.phoneNumber}>
                <input type={isViewPassword ? "text": props.type} 
                     className={props.name !== "mobileNumber"?styles.textfield:styles.phoneNumber} onInput={getCurrentInput}
                    spellCheck={false}
                    />
                {props.type === "password" ? <img src={isViewPassword ? "./assets/eyeclose.svg":"./assets/eyeopen.svg"} alt=""  className={`${styles.icon} ${styles.hover}`} onClick={changePasswordType} />
                :   <img src={props.img} alt=""  className={props.name !== "mobileNumber" ? styles.icon: styles.icons}/>}
           
                {/* <img src={props.img} alt=""  className={styles.icon}/> */}
            </div>
        </FloatLabel>
    )
}

export default TextField
