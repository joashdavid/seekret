import { Breadcrumb, Divider} from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ContactInfo } from './contact-info'
import { RoleForm } from './role-form'
// import styles from './view-contact.module.less'
// import DownloadLogo from '../../../assets/download.svg'
const ROLES = [
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
  {
    roleId: 4,
    roleName: 'Vendor',
  },
  {
    roleId: 5,
    roleName: 'Client',
  },
]

const ViewContact = () => {
  const [roles, setRole] = useState<string[]>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location = useLocation<any>()
  useEffect(() => {
    if (location.state.data.groups) {
      const roles: string[] = []
      ROLES.forEach((role) => {
        if (location.state.data.groups.includes(role.roleId)) {
          roles.push(role.roleName)
          console.log(roles)
        }
        setRole(roles)
      })
    }
  }, [location])

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>View. Contact</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <ContactInfo {...location.state.data}/>
      <RoleForm roles={undefined} {...roles}/>
    </>
  )
}

export { ViewContact }
