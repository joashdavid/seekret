import landingPageStyles from './dashboard.module.less'
import { useHistory } from 'react-router-dom'
import { Layout, Menu, Breadcrumb,Button } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { apiRequest } from '../../services/axios/axios'
import styles from './dashboard.module.less'
import { Divider } from 'antd'
import TextField from '../components/text-field/text-field'
import { useState } from 'react'
import globalStyles from '../app.module.less'
import { Select} from 'antd'
import { createOrganizationApi } from './api'


const LandingPage = () => {
    const { SubMenu } = Menu
    const { Header, Content, Sider } = Layout
    const history = useHistory()

    const logout = async() => {
      const response = await apiRequest('GET','users/logout','')
      console.log(response)
      history.push('/')
    }

    const [orgName, setOrgName] = useState("")
    const [shortName, setShortName] = useState("")
    const [theme , setTheme] = useState('')
    const { Option } = Select 
    const themeList = [
      {
          "color": "Teal",
          "hexcode": "008080"
      },
      {
          "color": "Turquoise",
          "hexcode": "40E0D0"
      },
      {
          "color": "Chartreuse",
          "hexcode": "7FFF00"
      },
      {
          "color": "Sienna",
          "hexcode": "A0522D"
      }
  ]

    const getOrgName = (data:string) => {
      setOrgName(data)
  }
  const getShortName =(data: string) => {
      setShortName(data)
  }
  const getTheme = (data:string) => {
      setTheme(data)
  }

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
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} >
              <Breadcrumb.Item className={styles.breadcrumb}>Add</Breadcrumb.Item>
              <Breadcrumb.Item className={styles.breadcrumb}>Organization</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
            >
              <Divider/>
              <div style={{ width:"37vh"}}>
                <span style={{marginBottom:"1vh"}}>1.Fill the organization details</span>
              <TextField
                onUserInput={getOrgName}
                label="Organization name"
                name="orgName"
                type="text"
                img={''}
                value = {orgName}
                />
                <TextField
                onUserInput={getShortName}
                label="Short name"
                name="shortName"
                type="text"
                img={''}
                value = {shortName}
                />
                <Select className={styles.dropDown} 
                defaultValue={themeList[0].hexcode} onChange={getTheme}>
                    {themeList .map(theme =>{
                       return ( <Option value={theme.hexcode}>{theme.color}</Option>)
                    })}
                </Select>
              </div>
              

                <input className={globalStyles.formButton} onClick={createOrganization} type="Button"  value="Save"/>
              {/* <Router>
                <Switch>
                    <Route exact path='/createOrganization' component={OrgForm}/>
                </Switch>
              </Router> */}
              {/* <OrgForm/> */}
             
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </div>
        
        )
}
export default LandingPage
