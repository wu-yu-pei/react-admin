import './index.less'
import login from './images/logo.png';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import ajax from '../../api/index.js';
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const {username,password} = values
    ajax('http://120.55.193.14:5000/login',{username,password},"POST").then(res => {
      console.log(res);
    })
  };
 
  return (
    <div className='login'>
        <div className='login-header'>
            <img src={login} alt="title" />
            <h1>React:后台管理项目</h1>
        </div>
    <section className='mylogin-form'>
    <h1>用户登录</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {
            min:4,
            message:'用户名至少4位'
          },
          {
            max:12,
            message:'用户名最多12位'
          },
          {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须包括数字,下划线,字母'}
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
            rules={[
                {required: true, message: 'Please input your Password!',},
                {min:4, message:'密码至少4位' },
                {max:12,message:'密码最多12位'},
                {pattern:/^[a-zA-Z0-9_]+$/,message:'密码必须包括数字,下划线,字母'}
              ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
         登录
        </Button>
      </Form.Item>
    </Form>
    </section>
  </div>
  );
};

export default Login
