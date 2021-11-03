import { Tabs } from 'antd'
import { useEffect } from 'react'
const RoleForm = (props: { roles: string[] | undefined }) => {
    useEffect(() => {
        console.log(props.roles)
    },[])
  const { TabPane } = Tabs
  return (
      <Tabs>
        {props.roles &&
          props.roles.map((role: string) => {
            return (
              <TabPane tab={role} key={role}>
                Content of Tab {role}
              </TabPane>
            )
          })}
      </Tabs>
  )
}

export { RoleForm }
