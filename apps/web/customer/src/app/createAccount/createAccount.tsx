/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import {RuleObject} from "rc-field-form/lib/interface"
import { ReactComponent as UserIcon } from  "../../assets/IndividualIcon.svg"
import styles from './createAccount.module.less'
import { Form, Input, Button, Checkbox } from 'antd'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import createAccountApi from './api'
import { UserRegistrationModel } from '../../model/model'
import FloatLabel from '../components/FloatLabel/floatLabel'


const CreateAccount = () => {
  const [form] = Form.useForm()
  const [isChecked, setChecked] = useState(false)
  const [firstName, setFirstName] = useState("")
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  const onFinish = async(values: UserRegistrationModel) => {
    form.resetFields()
    const response  = await createAccountApi(values)
    console.log(response)
  }

  const onFinishFailed = () => {
    console.log('Failed:')
  }

  const onReset = () => {
      form.resetFields()
  }

  const onCheckboxChange = (event :any) => {
       setChecked(event.target.checked)
  }
  const checkBoxValidation = (rule: RuleObject, value: any, callback: (error?: string) => void) => {
    if(isChecked) {
        return callback()
    }
    return callback("Please accept the terms and conditions")
}

  return (
    <Form
      name="basic"
      form = {form}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
            validateTrigger : 'onSubmit'
        }
        ]}
      >
        <Input className={styles.textFeild} 
        suffix={<UserIcon className={styles.textFeildIcon} 
        />} />
        
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
            validateTrigger : 'onSubmit'
          },{
            pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Please enter a valid mail',
            validateTrigger : 'onSubmit'
          },
        ]}
      >
        <Input suffix = {<MailOutlined />}/>
      </Form.Item>
      <FloatLabel label="First Name" name="firstName"  value={firstName}>
          <Input value={firstName} className={styles.textFeildInput}
            onChange={e => setFirstName(e.target.value)}  />
      </FloatLabel>
      <Form.Item
        label="Mobile no"
        name="phoneNo"
        rules={[
          {
            required: true,
            message: 'Please input your Phone!',
            validateTrigger : 'onSubmit'
          },
        ]}
      >
        <Input suffix = {<PhoneOutlined />} />
        
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        // value = {password}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
            validateTrigger : 'onSubmit'
          },
            {
            pattern:/^[\u0021-\u007E]{8,64}$/,
            message:"Please enter a valid password",
            validateTrigger : 'onSubmit'
          },{
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
            validateTrigger : 'onSubmit'
          },
          {
            pattern:/^[\u0021-\u007E]{8,64}$/,
            message:"Please enter a valid password",
            validateTrigger : 'onSubmit'
          },
          {
            // validator:changePasswordMatch
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        rules={
          [
          {
            validator:checkBoxValidation,
            validateTrigger : 'onSubmit'
          }
        ]}
      >
        <Checkbox checked={isChecked} onChange={onCheckboxChange}
        >I agree the terms and conditions</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateAccount
