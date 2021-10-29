import styles from './text-area.module.less'
import FloatLabelTextarea from '../float-label-textarea/float-label-textarea'


const TextArea= (props: { onUserInput: (arg0: string) => void; label: string; 
    name: string; type: string;value: string }) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getCurrentInput = (event: any) => {
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
        <FloatLabelTextarea label={props.label} name={props.name}  
        value={props.value} onUserInput={props.value}>
            <div>
                <textarea
                     className={styles.textarea} onChange={getCurrentInput}
                    spellCheck={false}
                    />
            </div>
        </FloatLabelTextarea>
    )
}

export {TextArea}
