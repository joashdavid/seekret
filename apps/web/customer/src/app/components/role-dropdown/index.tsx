import { Select } from 'antd'
import { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'

import styles from './role-dropdown.module.less'
import { Key } from 'rc-select/lib/interface/generator'
import RoleFloatLabel from './role-floatlabel'
import { fetchRolesApi } from './api'
import {Group} from '../../../model/model'

const RoleDropdown = (props: {
  onChange: (arg0: number[]) => void
  label: string
  value: number[]
  type: string
}) => {

  const { Option } = Select
  const [roles, setRoles] = useState<Group[]>([])
  const [isValueChecked, setValueChecked] = useState<boolean>(false)


  useEffect(() => {
    fetchRoles()
  }, [])

  const fetchRoles = async() => {
      const response = await fetchRolesApi()
      if(response.success){
        setRoles(response.data[props.type])
      }
      if (props.value.length !== 0) {
        setValueChecked(true)
      }
  }

  function handleChange(value: number[]) {
    setValueChecked(true)
    props.onChange(value)
  }
  const handleKeyPressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
  }
  return (
    <RoleFloatLabel label={props.label} name="themeDropdown" isChecked={isValueChecked}>
      <Select
        mode="tags"
        onInputKeyDown={handleKeyPressInput}
        showSearch={false}
        onChange={handleChange}
        className={styles.dropDown}
        bordered={false}
        value={props.value[0] === null ? undefined : props.value}
      >
        {roles.map((data: { groupId: Key; groupName: string }) => {
          return (
            <Option value={data.groupId} key={data.groupId}>
              <div className={styles.optionWrapper}>
                <span className={styles.selected}>{data.groupName}</span>
              </div>
            </Option>
          )
        })}
      </Select>
    </RoleFloatLabel>
  )
}

export { RoleDropdown }
