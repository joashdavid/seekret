import FloatLabel from '../float-label/float-label'
import styles from './dropdown.module.less'
import { Select } from 'antd'
import { ReactComponent as DropDownArrow } from '../../../assets/arrow-down.svg'
// import { ReactComponent as DropDown } from '../../ass''
import { useState } from 'react'

const DropDown = (props: {
  onChange: (arg0: string) => void
  value: string
  list: string[]
  label: string
}) => {
  const [isOptionDidChange, setIsOptionDidChange] = useState<boolean>(false)
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
        showSearch= {true}
        
      >
        {props.list.map((data) => {
          return (
            <Option value={data} key={data}>
              <div className={styles.optionWrapper}>
                {/* <Badge color={`${'#' + theme.hexcode}`} className={styles.themeBadge} /> */}
                <span className={styles.selected}>{data}</span>
              </div>
            </Option>
          )
        })}
      </Select>
    </FloatLabel>
  )
}

export { DropDown }
