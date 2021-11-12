import Header from './components/header'
import { Routing } from './routing'
import { Layout } from 'antd'
import landingPageStyles from './dashboard.module.less'
import { SideNav } from './side-nav'

function Dashboard() {
    const { Content } = Layout
    return (
        <div className={landingPageStyles.containers}>
            <Layout style={{ width: '100%', height: '100vh' }}>
           <Header />
               <Layout>
               <SideNav />
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