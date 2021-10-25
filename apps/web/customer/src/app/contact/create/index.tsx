import { Breadcrumb,Typography,Divider } from "antd"

const CreateContact = () => {
    const {Text} = Typography
    return(
    <>
     <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Add. Contact</Breadcrumb.Item>
            </Breadcrumb>
            <Text strong>Add Contact</Text>
      <Divider />
    </>
    )  
}

export {CreateContact}
