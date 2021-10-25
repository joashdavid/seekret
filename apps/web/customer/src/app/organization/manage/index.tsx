import { Breadcrumb, Typography, Divider } from 'antd'

const ManageOrg = () => {
  const { Text } = Typography
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Manage. Organization</Breadcrumb.Item>
      </Breadcrumb>
      <Text strong>Manage Organization</Text>
      <Divider />
    </>
  )
}

export { ManageOrg }
