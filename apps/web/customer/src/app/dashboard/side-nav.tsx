import { Link, useHistory } from 'react-router-dom'
import { Menu, Button } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

import { apiRequest } from '../../services/axios/axios'
import landingPageStyles from './dashboard.module.less'

const SideNav = () => {
    const { SubMenu } = Menu
    
  const { Sider } = Layout
    const history = useHistory()

    const logout = async () => {
        const response = await apiRequest('GET', 'users/logout', '')
        console.log(response)
        history.push('/')
      }

    return(
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Create">
              <Menu.Item key="createOrganization">
                  <Link to="/dashboard/createOrg">Organization</Link>
                </Menu.Item>
                <Menu.Item key="createContact">
                  <Link to="/dashboard">Contact</Link>
                </Menu.Item>
                
              </SubMenu>
              <SubMenu key="sub2" icon={<UserOutlined />} title="Manage">
              <Menu.Item key="manageOrganization">
                  <Link to="/dashboard/manageOrg">Organization</Link>
                </Menu.Item>
                <Menu.Item key="manageContact">
                  <Link to="/dashboard/manageContact">Contact</Link>
                </Menu.Item>
              </SubMenu>

              <div className={landingPageStyles.Button}>
                <Button icon={<LogoutOutlined />} danger onClick={logout}>
                  Logout
                </Button>
              </div>
            </Menu>
          </Sider>
    )
}

export {SideNav}
