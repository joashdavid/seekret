import landingPageStyles from './dashboard.module.less'
import { useHistory } from 'react-router-dom'
import { Layout, Menu, Breadcrumb,Button, Typography } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { apiRequest } from '../../services/axios/axios'
import { Divider } from 'antd'
import {TextFieldNoSuffix} from '../components/text-field-nosuffix'
import { useState, useEffect } from 'react'
import { createOrganizationApi, getThemeApi } from './api'
import CycButton from '../components/cyc-button/cyc-button'
import { ThemeModel } from '../../model/model'
import { ThemeDropDown } from '../components/theme-dropdown'



const Dashboard = () => {
    const { SubMenu } = Menu
    const { Header, Content, Sider } = Layout
    const history = useHistory()
    const {Text} = Typography

    const logout = async() => {
      const response = await apiRequest('GET','users/logout','')
      console.log(response)
      history.push('/')
    }

    const [orgName, setOrgName] = useState("")
    const [shortName, setShortName] = useState("")
    const [theme , setTheme] = useState('')
    const [themeList ,setThemeList] = useState<ThemeModel[]>([])

  
    const getOrgName = (data:string) => {
      setOrgName(data)
  }
  const getShortName =(data: string) => {
      setShortName(data)
  }
  const getTheme = (data:string) => {
      setTheme(data)
  }

  const getThemeData = async() => {
    const response = await getThemeApi()
    setThemeList(response.data)
    console.log(response)
  }
    useEffect(() => {
        getThemeData()
    },
    [])
  const createOrganization = async() => {
    const response = await createOrganizationApi(orgName,shortName,theme)
    console.log(response)
    if(response.success){
        setOrgName('')
        setShortName('')
        setTheme('')
    }
  }


    return(
        <div className={landingPageStyles.containers}>
        <Layout style={{width:"100%",height:"100vh"}}>
        <Header className="header">
          
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
          <Layout className={landingPageStyles.layout}>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Add. Organization</Breadcrumb.Item>
            </Breadcrumb>
            <Text strong>Add Organization</Text>
            <Content
              className="site-layout-background"
            >
              <Divider/>
              <div style={{ width:"37vh"}}>
                <p style={{marginBottom:"1vh"}}>1.Fill the organization details</p>
              <TextFieldNoSuffix
                onUserInput={getOrgName}
                label="Organization name"
                name="orgName"
                type="text"
                value = {orgName}
                />
                <TextFieldNoSuffix
                onUserInput={getShortName}
                label="Short name"
                name="shortName"
                type="text"
                value = {shortName}
                />
                <ThemeDropDown label="Choose a theme" themeList = {themeList} onChange={getTheme} value={theme}/>
              </div>
              
                <CycButton value="SAVE" onClick={createOrganization} disabled={false}/>

             
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </div>
        
        )
}
export default Dashboard
