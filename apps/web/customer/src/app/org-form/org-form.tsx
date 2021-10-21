import { Form, Input, Button, Select } from 'antd'
import { CreateOrganisationModel, ThemeModel } from './model'
import {ReactComponent as DownArrow}from '../../assets/drop-down-down-black.svg'
import { useEffect  } from 'react'
import { getThemeApi } from './api'

// import TextField from '../components/text-field/text-field'
let themes :ThemeModel[]
const OrgForm = () => {
    const { Option } = Select
    
    const getTheme = async() => {
        const response = await getThemeApi()
        themes = response.themes
        console.log(themes)
    } 
    useEffect( () => {
        getTheme()
    }
    ,[])
  const onFinish = (values: CreateOrganisationModel) => {
    console.log('Success:', values)
  }

  const onFinishFailed = () => {
    console.log('Failed:')
  }
  
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Organisation name"
        name="org_name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Short Name"
        name="org_short_name"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
        
      </Form.Item>

      <Form.Item
        label="Choose a theme"
        name="theme"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
      {themes && 
      <Select defaultValue={themes[0].color}
      suffixIcon={<DownArrow />}>
         {themes.map(item =>(
          <Option value={item.hexcode}>{item.color}</Option>
         ))}
      </Select>} 
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export {OrgForm}
