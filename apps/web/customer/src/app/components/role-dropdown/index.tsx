import { Select } from 'antd'
import styles from './role-dropdown.module.less'
import FloatLabel from '../float-label/float-label'
import { useState,useEffect } from 'react'
import { Key } from 'rc-select/lib/interface/generator'

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
  onChange: (arg0: string[]) => void
  label: string
  value: string[]
  type: string
}) => {
  const { Option } = Select
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [roles, setRoles] = useState<any>([])
  useEffect(() =>{
    if (props.type === 'individual') {
        setRoles(Individualroles)
      }
      else {
        setRoles(CompanyRoles)
      }
  },[])
  
 

  function handleChange(value: string[]) {
    props.onChange(value)
  }

  return (
    <FloatLabel label={props.label} name="themeDropdown" value={props.value[0]}>
      <Select mode="tags" onChange={handleChange} className={styles.dropDown} bordered={false}>
        {roles.map(
          (data: {
            roleId: Key
            roleName: string
          }) => {
            return (
              <Option value={data.roleId}>
                <div className={styles.optionWrapper}>
                  <span className={styles.selected}>{data.roleName}</span>
                </div>
              </Option>
            )
          }
        )}
      </Select>
    </FloatLabel>
  )
}

export { RoleDropdown }
