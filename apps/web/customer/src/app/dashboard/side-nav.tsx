import React, { useState } from "react"
import './dashboard.module.less'
import './side-nav.css'
import {ReactComponent as BackButton} from './assets/BackButton.svg'
import {ReactComponent as FrontButton} from './assets/FrontButton.svg'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Button, Layout } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'

import { apiRequest } from '../../services/axios/axios'
import landingPageStyles from './dashboard.module.less'

const SideNav = () => {
    
  const { SubMenu } = Menu
  const { Sider } = Layout
  const history = useHistory()
  const [isInactive, setInactive] = useState(false)

  const logout = async () => {
    const response = await apiRequest('GET', 'users/logout', '')
    console.log(response)
    localStorage.removeItem('Token')
    history.push('/')
  }


    return(
          <div className={`side-nav-container ${isInactive ? "inactive" : ""}`}>
            <div className="toggle-menu-btn" onClick={() => {setInactive(!isInactive)}}>
                {isInactive ? (
                <>
                <Sider width={80}/>
                <FrontButton className="front-btn"/>
                </>
              ) : (
                <Sider width={180}>
                  <Menu
              mode="inline"
              defaultSelectedKeys={['manageContact']}
              defaultOpenKeys={['sub2']}
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
                <Menu.Item key="manageCatalogue">
                  <Link to="/dashboard/manage/catalogue">Catalogue</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
                <BackButton className="back-btn"/>
                </Sider>
              )}
            </div>
            {/*
            <Menu
              mode="inline"
              defaultSelectedKeys={['manageContact']}
              defaultOpenKeys={['sub2']}
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
                <Menu.Item key="manageCatalogue">
                  <Link to="/dashboard/manage/catalogue">Catalogue</Link>
                </Menu.Item>
              </SubMenu>
              <div className={landingPageStyles.Button}>
                <Button icon={<LogoutOutlined />} danger onClick={logout}>
                  Logout
                </Button>
              </div>
            </Menu>
            */}
          </div>
    )
}




export {SideNav}
