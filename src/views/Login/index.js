import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.scss'
export default class index extends Component {
    render() {
        return (
            <div className='LoginPage'>
                <div className='LoginBox'>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: '请输入你的用户名!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: '请输入你的密码!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                            />
                        </Form.Item>
                        <div className='choose-box1'>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className='login-form-remember'>记住我</Checkbox>
                                </Form.Item>
                                <a className="login-form-forgot" href="">
                                忘记密码
                                </a>
                            </Form.Item>
                        </div>
                        <div className='choose-box2'>
                            <Form.Item>
                                <Button className='login-form-login' type="primary" htmlType="submit" className="login-form-button">
                                登录
                                </Button>
                                <a className='login-form-register' href="">注册</a>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
