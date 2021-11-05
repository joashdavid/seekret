import { Select } from 'antd'
import styles from './role-dropdown.module.less'
// import FloatLabel from '../float-label/float-label'
import { useState, useEffect } from 'react'
import { Key } from 'rc-select/lib/interface/generator'
import RoleFloatLabel from './role-floatlabel'

const Individualroles = [
  {
    roleId: 1,
    roleName: 'Employee',
  },
  {
    roleId: 2,
    roleName: 'Intern',
  },
  {
    roleId: 3,
    roleName: 'Consultant',
  },
]

const CompanyRoles = [
  {
    roleId: 4,
    roleName: 'Vendor',
  },
  {
    roleId: 5,
    roleName: 'Client',
  },
]

const RoleDropdown = (props: {
  onChange: (arg0: number[]) => void
  label: string
  value: number[]
  type: string
}) => {
  const { Option } = Select
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [roles, setRoles] = useState<any>([])
  const [isValueChecked, setValueChecked] = useState(false)
  useEffect(() => {
    if (props.type === 'individual') {
      
      setRoles(Individualroles)
    } else {
      setRoles(CompanyRoles)
    }
    if(props.value.length !== 0){
      setValueChecked(true)
    }
  }, [props])
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
        {roles.map((data: { roleId: Key; roleName: string }) => {
          return (
            <Option value={data.roleId} key={data.roleId}>
              <div className={styles.optionWrapper}>
                <span className={styles.selected}>{data.roleName}</span>
              </div>
            </Option>
          )
        })}
      </Select>
    </RoleFloatLabel>
  )
}

export { RoleDropdown }
