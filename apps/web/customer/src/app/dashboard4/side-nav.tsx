import React, { useState } from "react"
import './dashboard.module.less'
import './side-nav.css'
import {ReactComponent as FixedNavBackButton} from './assets/BackButton.svg'
import {ReactComponent as FixedNavFrontButton} from './assets/FrontButton.svg'
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
                  <FixedNavFrontButton className="fixed-nav-front-btn"/>
                  </>
                ) : (
                  <>
                  <Sider width={180} />
                  <FixedNavBackButton className="fixed-nav-back-btn"/>
                  </>
                )}
              </div>
            </div>
      )
  }




export {SideNav}
