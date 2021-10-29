
import styles from './country-code-dropdown.module.less'
import { Select } from 'antd'
import { ReactComponent as DropDownArrow } from '../../../assets/arrow-down.svg'
import { countries } from './country'
import { useState } from 'react'

const CountryCode = (props: {
  onChange: (arg0: string) => void
  value: string
}) => {
  const [isOptionDidChange, setIsOptionDidChange] = useState(false)
  const { Option } = Select
  const getTheme = (data: string) => {
    props.onChange(data)
  }
  const toogleSuffixIcon = () => {
    setIsOptionDidChange(!isOptionDidChange)
  }
  return (
      <Select
        className={styles.dropDown}
        bordered={false}
        value={props.value}
        onChange={getTheme}
        suffixIcon={<DropDownArrow />}
        onDropdownVisibleChange={toogleSuffixIcon}

      >
        {countries.map((data) => {
          return (
            <Option value={data.countryCode} className={styles.options}>
              <div className={styles.optionWrapper}>
                  <span><img src={data.flag} alt="" className={styles.flag} /></span>
                <span className={styles.selected}>{data.countryCode}</span>
              </div>
            </Option>
          )
        })}
      </Select>
  )
}

export { CountryCode }