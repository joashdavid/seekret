import { Breadcrumb, Divider } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ContactInfo } from './role-from/contact-info'
import { RoleForm } from './role-from'
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
      console.log(location.state.data)
      const roles: string[] = []
      ROLES.forEach((role) => {
        if (location.state.data.groups.includes(role.roleId)) {
          roles.push(role.roleName)
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
      <ContactInfo {...location.state.data} />
      <Divider />
      <RoleForm roles={roles} data={location.state.data}/>
    </>
  )
}

export { ViewContact }
