import OtpField from '../components/otp-field/otp-input-field'
import otpstyles from './otp.module.less'
import { useState, useCallback } from 'react'
export interface OtpInputProps {
  length: number
  onChangeOtp: (otp: string) => void
  isAutoFocus?: boolean
  isNumberInput?: boolean
  isDisabled?: boolean
}

const OtpFields = (props: OtpInputProps) => {
  const { length, isNumberInput, isAutoFocus, isDisabled, onChangeOtp, ...rest } = props

  const [activeInput, setActiveInput] = useState(0)
  const [otpValues, setOtpValues] = useState(Array<string>(length).fill(''))

  // Helper to return OTP from inputs
  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join('')
      onChangeOtp(otpValue)
    },
    [onChangeOtp]
  )

  // Helper to return value with the right type: 'text' or 'number'
  const getRightValue = useCallback(
    (str: string) => {
      const changedValue = str

      if (!isNumberInput || !changedValue) {
        return changedValue
      }

      return Number(changedValue) >= 0 ? changedValue : ''
    },
    [isNumberInput]
  )

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOtpValues = [...otpValues]
      updatedOtpValues[activeInput] = str[0] || ''
      setOtpValues(updatedOtpValues)
      handleOtpChange(updatedOtpValues)
    },
    [activeInput, handleOtpChange, otpValues]
  )

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0)
      setActiveInput(selectedIndex)
    },
    [length]
  )

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1)
  }, [activeInput, focusInput])

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1)
  }, [activeInput, focusInput])

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index)
    },
    [focusInput]
  )

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value)
      if (!val) {
        e.preventDefault()
        return
      }
      changeCodeAtFocus(val)
      focusNextInput()
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  )

  // Handle onBlur input
  const onBlur = useCallback(() => {
    setActiveInput(-1)
  }, [])

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = e.key

      switch (pressedKey) {
        case 'Backspace':
        case 'Delete': {
          e.preventDefault()
          if (otpValues[activeInput]) {
            changeCodeAtFocus('')
          } else {
            focusPrevInput()
          }
          break
        }
        case 'ArrowLeft': {
          e.preventDefault()
          focusPrevInput()
          break
        }
        case 'ArrowRight': {
          e.preventDefault()
          focusNextInput()
          break
        }
        default: {
          if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault()
          }
          break
        }
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  )

  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length - activeInput)
        .split('')
      if (pastedData) {
        let nextFocusIndex = 0
        const updatedOtpValues = [...otpValues]
        updatedOtpValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val)
            if (changedValue) {
              updatedOtpValues[index] = changedValue
              nextFocusIndex = index
            }
          }
        })
        setOtpValues(updatedOtpValues)
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1))
        handleOtpChange(updatedOtpValues)
      }
    },
    [activeInput, getRightValue, length, otpValues,handleOtpChange]
  )

  return (
    <div className={otpstyles.otpWrapper} {...rest}>
      {Array(length)
        .fill('')
        .map((items, index) => (
          <OtpField
            key={`SingleInput-${index}`}
            type={isNumberInput ? 'number' : 'text'}
            isFocus={activeInput === index}
            value={otpValues && otpValues[index]}
            autoFocus={isAutoFocus}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={onBlur}
            onPaste={handleOnPaste}
            disabled={isDisabled}
          />
        ))}
    </div>
  )
}

export default OtpFields