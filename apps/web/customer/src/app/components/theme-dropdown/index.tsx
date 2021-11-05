import FloatLabel from '../float-label/float-label'
import styles from './theme-dropdown.module.less'
import { Select } from 'antd'
import { ThemeModel } from '../../../model/model'
import { ReactComponent as DropDown } from '../../../assets/arrow-down.svg'
import { useState } from 'react'

const ThemeDropDown = (props: {
  onChange: (arg0: string) => void
  value: string
  themeList: ThemeModel[]
  label: string
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
        suffixIcon={<DropDown />}
        onDropdownVisibleChange={toogleSuffixIcon}
      >
        {props.themeList.map((theme) => {
          return (
            <Option value={theme.color}>
              <div className={styles.optionWrapper}>
                <div
                  className={styles.themeBadge}
                  style={{
                    background: `transparent linear-gradient(90deg, #${theme.hexcodeEnd} 0%,
                      #${theme.hexcodeStart} 100%) 0% 0% no-repeat padding-box`,
                  }}
                ></div>
                <span className={styles.selected}>{theme.color}</span>
              </div>
            </Option>
          )
        })}
      </Select>
    </FloatLabel>
  )
}

export { ThemeDropDown }
