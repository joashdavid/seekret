import { Select } from 'antd'
import styles from './role-dropdown.module.less'

const roles = [
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

const RoleDropdown = () => {
    const { Option } = Select
  function handleChange(value: string) {
    console.log(`Selected: ${value}`)
  }

  return (
    <Select mode="tags"  onChange={handleChange} className={styles.customSelect} style={{backgroundColor:"#f7f8fd !important",width:"100%"}} dropdownStyle={{backgroundColor:"#f7f8fd",}} >
      {roles.map((data) => {
        return (
          <Option value={data.roleId}>
            <div className={styles.optionWrapper}>
              <span className={styles.selected}>{data.roleName}</span>
            </div>
          </Option>
        )
      })}
    </Select>
  )
}

export { RoleDropdown }
