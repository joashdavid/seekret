/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input , Form} from 'antd'
import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'

import styles from './text-field.module.less'

const TextFieldAnt = (props: {
  value: string
  label: string
  suffix: string
}) => {
  const [isFocus, setFocus] = useState(false)
  // const getCurrentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   props.onUserInput(event.target.value)
  // }

  const labelClass =
    isFocus || (props.value && props.value.length !== 0) ? 'label label-float' : 'label'

  return (
    <div
      className={styles.floatlabel}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Form.Item name={props.label} >
      <Input
        className={styles.textfield}
        value={props.value}
        bordered={false}
        // onInput={getCurrentInput}
        spellCheck={false}
        suffix={<ReactSVG src={props.suffix}  />}
      />
      </Form.Item>
      <label className={labelClass}>{props.label}</label>
    </div>
  )
}

export { TextFieldAnt }
