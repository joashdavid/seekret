import { Tabs } from 'antd'
const RoleForm = (props: { roles: string[] | undefined }) => {
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
