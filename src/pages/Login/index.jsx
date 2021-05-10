import './index.less'
import login from './images/logo.png';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import {Redirect} from 'react-router-dom'
import {reqLogin} from '../../api/index'
import memoryUntil from '../../untils/memoryUntil.js'
import storeUntil from '../../untils/storeUntil'
// props通过参数的方式 传给组件
const Login = (props) => {
  // 从props.history 中取出跳转路由的方法
  const $router = props.history
  // 如果用户已经登录 就跳转到admin界面
  if(Object.keys(memoryUntil.user).length > 0 || Object.keys(storeUntil.getUser()).length > 0) {
    return <Redirect to="/"></Redirect>
  }
  // 提交表单的回调
  const onFinish = async (values) => {
    const {username,password} = values
    let res = await reqLogin(username,password)
    console.log(res);
    if(res.status === 0) {
      // 将用户信息保存在memory中
      memoryUntil.user = res.data
      storeUntil.saveUser(res.data)
       // 跳转路由
      $router.push('/admin') 
      // 显示提示消息
      message.open({
        content:'登录成功'
      })
    }
    if(res.status === 1) {
      message.error({
        content:res.msg
      })
    }
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
