import React, { Component,useState } from 'react'
import {
    Form,
    Input,
    Tooltip,
    Checkbox,
    Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './register.scss'


export default class register extends Component {
    render() {
        return (
            <div className='register-page'>
                <div className='register-box'>
                    <Form
                    className='register-form'
                    name="register"
                    scrollToFirstError
                    >
                        <Form.Item className='register-form-item'
                            name="nickname"
                            label={
                            <span>
                                用户名&nbsp;
                            </span>
                            }
                            rules={[
                            {
                                required: true,
                                message: '请输入你的用户名!',
                                whitespace: true,
                            },
                            ]}
                        >
                            <Input className='input-text'/>
                        </Form.Item>

                        <Form.Item className='register-form-item'
                            name="password"
                            label="密码"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password className='input-text'/>
                        </Form.Item>

                        <Form.Item className='register-form-item'
                            name="confirm"
                            label="确认你的密码"
                            dependencies={['password']}
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('两次密码不相同!');
                                },
                            }),
                            ]}
                        >
                            <Input.Password className='input-text'/>
                        </Form.Item>

                        <Form.Item className='register-form-item'
                            name="email"
                            label="E-mail"
                            rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                            ]}
                        >
                            <Input className='input-text'/>
                        </Form.Item>

                        <Form.Item className='register-form-item'
                            name="phone"
                            label="电话号码"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                            ]}
                        >
                            <Input
                            className='input-text'/>
                        </Form.Item>

                        <Form.Item className='register-form-agreement'
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                            {
                                validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                            },
                            ]}
                        >
                            <Checkbox>
                            我已经阅读 <a href="">用户使用协议</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item className='register-form-button'>
                            <Button type="primary" htmlType="submit">
                            注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    };
}

