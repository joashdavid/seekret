import { useState } from 'react'

import styles from './text-field.module.less'
import FloatLabel from '../float-label/float-label'
import { Form } from 'antd'

const TextFieldD = (props: {
  name: string;
  onUserInput: (arg0: string) => void
  label: string
  value: string
  type: string | undefined
  img: string | undefined
}) => {
  const [isViewPassword, setIsViewPassword] = useState(false)
  const changePasswordType = () => {
    setIsViewPassword(!isViewPassword)
  }

  const getCurrentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.name === 'mobileNumber') {
      // props.onUserInput((event.target.value).replace(/[a-z@#$!^%*&={}<>~|?:;_`"',.[\]\\/]/g, ''))
    } else {
      props.onUserInput(event.target.value)
    }
  }

  return (
    <FloatLabel label={props.label} name={props.name} value={props.value}>
      <Form.Item name={props.name}>
        <div className={props.name !== 'mobileNumber' ? styles.textfield : styles.phoneNumber}>
          <input
            type={isViewPassword ? 'text' : props.type}
            className={props.name !== 'mobileNumber' ? styles.textfield : styles.phoneNumber}
            spellCheck={false}
            onInput={getCurrentInput}
          />
          {props.type === 'password' ? (
            <img
              src={isViewPassword ? './assets/eyeclose.svg' : './assets/eyeopen.svg'}
              alt=""
              className={`${styles.icon} ${styles.hover}`}
              onClick={changePasswordType}
            />
          ) : (
            <img
              src={props.img}
              alt=""
              className={props.name !== 'mobileNumber' ? styles.icon : styles.icons}
            />
          )}
        </div>
      </Form.Item>
    </FloatLabel>
  )
}

export default TextFieldD
