import { Layout } from 'antd'

import landingPageStyles from './dashboard.module.less'
import { Routing } from './routing'
import { DashBoardHeader } from './header'
import { SideNav } from './side-nav'


const Dashboard = () => {
  const { Content } = Layout
  return (
    <div className={landingPageStyles.containers}>
      <Layout style={{ width: '100%', height: '100vh' }}>
        
        <DashBoardHeader />
        <Layout>
          <SideNav/>
          <Layout className={landingPageStyles.layout}>
            <Content className="site-layout-background">
              <Routing />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
export default Dashboard
