import { useState } from 'react'
import styles from './textField.module.less'
import FloatLabel from '../floatLabel/floatLabel'


const TextField = (props: { onUserInput: (arg0: string) => void; label: string; 
    name: string; type: string | undefined; img: string | undefined }) => {
    const [currentInput, setCurrentInput] = useState('')

    const getCurrentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(event.target.value)
        props.onUserInput(event.target.value)
    }
    return (
        <FloatLabel label={props.label} name={props.name}  value={currentInput}>
            <div className={styles.textfield}>
                <input type={props.type} 
                    className={styles.textfield} onInput={getCurrentInput}
                    />
                <img src={props.img} alt=""  className={styles.icon}/>
            </div>
        </FloatLabel>
    )
}

export default TextField
