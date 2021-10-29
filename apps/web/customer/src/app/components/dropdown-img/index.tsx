import styles from './bank-dropdown.module.less'
import { Avatar, Select } from 'antd'
import { ReactComponent as DropDownArrow } from '../../../assets/arrow-down.svg'
import { banksWithImage } from './banks'
import { useState } from 'react'
import FloatLabel from '../float-label/float-label'

const BankDropdown = (props: {
  onChange: (arg0: string) => void
  value: string
  label :string
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
    <FloatLabel label={props.label} name="themeDropdown" value={props.value}>
      <Select
        className={styles.dropDown}
        bordered={false}
        value={props.value}
        onChange={getTheme}
        suffixIcon={<DropDownArrow />}
        onDropdownVisibleChange={toogleSuffixIcon}
      >
        {banksWithImage.map((data) => {
          return (
            <Option value={data.bank} className={styles.options}>
              <div className={styles.optionWrapper}>
                  <span><Avatar src={data.imgUrl} alt="" className={styles.bank} /></span>
                <span className={styles.selected}>{data.bank}</span>
              </div>
            </Option>
          )
        })}
      </Select>
      </FloatLabel>
  )
}

export { BankDropdown }
