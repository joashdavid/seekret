// import { Router, Switch, Route } from 'react-router'
import landingPageStyles from './dashboard.module.less'
import { useHistory } from 'react-router-dom'
import { Layout, Menu, Breadcrumb,Button } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { apiRequest } from '../../services/axios/axios'
import styles from './dashboard.module.less'
import { OrgForm } from '../org-form/org-form'
import { Divider } from 'antd'

const LandingPage = () => {
    const { SubMenu } = Menu
    const { Header, Content, Sider } = Layout
    const history = useHistory()

    const logout = async() => {
      const response = await apiRequest('GET','users/logout','')
      console.log(response)
      history.push('/')
    }

    return(
        <div className={landingPageStyles.containers}>
        <Layout style={{width:"100%",height:"100vh"}}>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
                
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <div className={landingPageStyles.Button}>
                <Button  icon={<LogoutOutlined/>} danger onClick={logout}>
                  Logout 
                </Button>
              </div>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} >
              <Breadcrumb.Item className={styles.breadcrumb}>Add</Breadcrumb.Item>
              <Breadcrumb.Item className={styles.breadcrumb}>Contact</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
            >
              <Divider/>
              {/* <Router>
                <Switch>
                    <Route exact path='/createOrganization' component={OrgForm}/>
                </Switch>
              </Router> */}
              <OrgForm/>
            
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </div>
        
        )
}
export default LandingPage
