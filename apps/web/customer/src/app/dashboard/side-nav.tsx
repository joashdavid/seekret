import React, { useState } from "react"
import './dashboard.module.less'
import './side-nav.css'
import {ReactComponent as BackButton} from './assets/BackButton.svg'
import {ReactComponent as FrontButton} from './assets/FrontButton.svg'
import { Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const SideNav = () => {
    
  const { SubMenu } = Menu
  const { Sider } = Layout
  const [isInactive, setInactive] = useState(false)


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
              defaultOpenKeys={['sub1','sub2']}
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
          </div>
    )
}




export {SideNav}
