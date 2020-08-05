import React, { Component } from 'react'
import {Layout, Menu} from 'antd';
import {Route,Link,Redirect,Switch}from 'react-router-dom'
import { appRouter } from '../../routers';
import './index.scss';
import {CaretRightOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const imgStyle={
    height: '500px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#90c322',
    float: 'left',
    margin: '20px 30px 20px 70px'
}
export default class index extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" onClick={()=>{window.location.href="/app/home"}}>
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[appRouter[0].path]}>
                        {
                            appRouter.map(route=>{
                            return (<Menu.Item key={route.path} {...route}>
                                <Link to={route.path}>{route.title}</Link>
                            </Menu.Item>)
                            })
                        }
                        <Menu.Item style={{float:'right'}}>用户</Menu.Item>
                        </Menu>
                    </Header>
                    <Content className="detail-content">
                        <div className='content-center'>
                            <div className="foos-title">菜名</div>
                            <div className="food-detail">
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={imgStyle}></img>
                            </div>
                            <div className="information">
                                <div className="introduce">
                                    <p><CaretRightOutlined />简介</p>
                                    sdfasfasfasfa
                                </div>
                                <div className="introduce">
                                    <p><CaretRightOutlined />配料</p>
                                    sdfasfasfasfa
                                </div>
                                <div className="introduce">
                                    <p><CaretRightOutlined />做法</p>
                                    sdfasfasfasfa<br></br>
                                    撒大苏打
                                    的撒大
                                    的撒撒
                                    的撒sada
                                </div>
                                <div className="introduce">
                                    <p><CaretRightOutlined />注意事项</p>
                                    sdfasfasfasfa
                                </div>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design 2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }
}
