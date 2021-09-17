import React from 'react';
import { Form, Input, Button } from 'antd';
import { login } from '../../api/user'
import { withRouter } from 'react-router-dom'
import './style.css'

const Signin = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    // 登录请求
    login(values).then(res => {
      console.log(res, '-----');
      window.localStorage.setItem('jwtToken', res.token)
      props.history.push('/')
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="sign-in">
      <Form
        name="basic"
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
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(Signin)