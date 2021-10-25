import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Divider, Select } from 'antd'
import { Layout, Menu, Button } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'

import landingPageStyles from './dashboard.module.less'
import { apiRequest } from '../../services/axios/axios'
import { fetchOrganizationApi } from './api'
import CycButton from '../components/cyc-button/cyc-button'
import { OrgnizationModel } from './model'
import { DashboardRouter } from '../dashboard-routing'

const Dashboard = () => {
  const { SubMenu } = Menu
  const { Option } = Select
  const { Header, Content, Sider } = Layout
  const history = useHistory()

  const [orgList, setOrgList] = useState<OrgnizationModel[]>([])

  const logout = async () => {
    const response = await apiRequest('GET', 'users/logout', '')
    console.log(response)
    history.push('/')
  }

  const fetchOrg = async () => {
    const response = await fetchOrganizationApi()
    setOrgList(response.data)
  }
  const [selectedOrgTheme, setSelectedTheme] = useState('')

 const getOrgDetails = (data: string) => {
  const getSelectedOrgData = orgList.filter( orgSelected => (orgSelected.orgId === data))
  const selectedOrg = {...getSelectedOrgData}
  setSelectedTheme("#"+selectedOrg[0].theme)
  console.log(selectedOrgTheme)
 }

  useEffect(() => {
    fetchOrg()
  }, [])

  const redirectToCreateOrganization = () => {
    history.push('/dashboard')
  }

  return (
    <div className={landingPageStyles.containers}>
      <Layout style={{ width: '100%', height: '100vh' }}>
      <Header style={{backgroundColor:`${selectedOrgTheme}`}} className="header">
          <Select
            className={landingPageStyles.dropDown}
            onChange={getOrgDetails}
            style={{ width: 360 }}
            bordered={false}
            dropdownRender={(menu) => (
              <div>
                <span className={landingPageStyles.optionValue}>{menu}</span>
                <Divider style={{ margin: '4px 0' }} />
                <CycButton
                  value="+ ADD COMPANY"
                  onClick={redirectToCreateOrganization}
                  disabled={false}
                />
              </div>
            )}
          >
            {orgList.map((org) => {
              return <Option value={org.orgId}>{org.orgShortName}</Option>
            })}
          </Select>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
               <SubMenu key="sub1" icon={<UserOutlined />} title="Contact">
                <Menu.Item key="1">
                  <Link to="/dashboard">Create</Link>
                </Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<UserOutlined />} title="Organization">
                <Menu.Item key="1">
                  <Link to="/dashboard/createOrg">Create</Link>
                </Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <div className={landingPageStyles.Button}>
                <Button icon={<LogoutOutlined />} danger onClick={logout}>
                  Logout
                </Button>
              </div>
            </Menu>
          </Sider>
          <Layout className={landingPageStyles.layout}>
            <Content className="site-layout-background">
              <DashboardRouter />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
export default Dashboard
