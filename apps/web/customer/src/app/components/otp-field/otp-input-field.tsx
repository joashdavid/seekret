/* eslint-disable @typescript-eslint/naming-convention */
import React ,{ useLayoutEffect, useRef } from 'react'
import styles from  './otp.module.less'
import usePrevious from "./usePrevious"

export interface OtpFieldInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  isFocus?: boolean;
}


const OtpField = (props: OtpFieldInterface) => {
  const { isFocus, autoFocus, ...rest } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const prevFocus = usePrevious(!!isFocus)
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (isFocus && autoFocus) {
        inputRef.current.focus()
      }
      if (isFocus && autoFocus && isFocus !== prevFocus) {
        inputRef.current.focus()
        inputRef.current.select()
      }
    }
  }, [autoFocus, isFocus, prevFocus])
    return(
        <div className={styles.otpWrapper}>
          <div className={styles.otpSingleField}>
            <input className={styles.otpFields}   ref={inputRef} {...rest}/>
            </div>
        </div>
    )
}

export default OtpField
