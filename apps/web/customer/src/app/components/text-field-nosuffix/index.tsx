import styles from './text-field.module.less'
import FloatLabel from '../float-label/float-label'


const TextFieldNoSuffix = (props: { onUserInput: (arg0: string) => void; label: string; 
    name: string; type: string;value: string }) => {

    const getCurrentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        // if(props.name === "mobileNumber"){
        //     console.log(formatPhoneNumber(event.target.value))
        //     props.onUserInput((event.target.value).replace(/[a-z@#$!^%*&={}<>~|?:;_`"',.[\]\\/]/g, ''))
        // }
        // else{
            props.onUserInput(event.target.value)
        // }  
    }

    // const  formatPhoneNumber = (value:string) => {
  
    //     if (!value) return value
    //     const phoneNumber = value.replace(/[^\d]/g, "")
    //     const phoneNumberLength = phoneNumber.length
    //     if (phoneNumberLength < 4) return phoneNumber
      
    //     if (phoneNumberLength < 7) {
    //       return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    //     }
    //     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    //       3,
    //       6
    //     )}-${phoneNumber.slice(6, 10)}`
    //   }
    return (
        <FloatLabel label={props.label} name={props.name}  value={props.value}>
            <div className={props.name !== "mobileNumber"?styles.textfield:styles.phoneNumber}>
                <input type={props.type} value={props.value}
                     className={styles.textfield} onInput={getCurrentInput}
                    spellCheck={false}
                    />
            </div>
        </FloatLabel>
    )
}

export {TextFieldNoSuffix}
