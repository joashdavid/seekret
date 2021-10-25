import { Breadcrumb, Typography, Divider } from 'antd'

const ManageContact = () => {
  const { Text } = Typography
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Manage. Contact</Breadcrumb.Item>
      </Breadcrumb>
      <Text strong>Manage Contact</Text>
      <Divider />
    </>
  )
}

export { ManageContact }
