/* eslint-disable jsx-a11y/alt-text */
import { Layout, Menu} from 'antd';
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './index.scss'
import { Carousel } from 'antd';
import { Divider } from 'antd';
// import { Card } from 'antd';
// import { Link } from 'react-router-dom';
import { List, Card } from 'antd';
// import {Route,Link,Redirect,Switch}from 'react-router-dom'
import {SmileOutlined,CoffeeOutlined,CrownOutlined} from '@ant-design/icons';



const data = [
    {
    title: 'Title 1',
    },
    {
    title: 'Title 2',
    },
    {
    title: 'Title 3',
    },
    {
    title: 'Title 4',
    },
];
const { Meta } = Card;
const cardStyle = {
    width: 300,
    float:'left',
    marginLeft:28,
    marginTop:20
}
const contentStyle = {
    height: '480px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#90c322',
    float: 'left',
    margin: '20px 27px'
};
const {Content,Sider } = Layout;

export default class index extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="side" width={230}>
                        <div className="part1">
                        <br></br>
                            <span class="title"> &nbsp;
                                <SmileOutlined /> 今天你吃饭了吗
                            </span>
                            <p style={{fontSize:15,color:"white"}}>食为天性，静静地咀嚼，轻轻地回味，非比寻常的韵致</p>
                        </div>
                        <div className="part2">
                        <br></br>
                        <span class="title"> &nbsp;
                            <CrownOutlined /> 八珍玉食
                            </span>
                            <p style={{fontSize:15,color:"white"}}>品味美食，而不是品味菜单，烧一锅好菜，也绝不是烧钱</p>
                        </div>
                        <div className="part3">
                        <br></br>
                        <span class="title"> &nbsp;
                        <CoffeeOutlined /> 酸甜苦辣味道全
                            </span>
                            <p style={{fontSize:15,color:"white"}}>初游唐安饭薏米，炊成不减雕胡美</p>
                        </div>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 480}}>
                        <Carousel autoplay style={{borderBlockEnd: '1px solid #90c322'}}>
                            <div>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                            </div>
                            <div>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                            </div>
                            <div>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                            </div>
                            <div>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                                <img src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={contentStyle} onClick={()=>{window.location.href="/detail"}}/>
                            </div>
                            </Carousel>
                    </Content>
                </Layout>
                <Divider><h1 style={{fontSize:'30px', fontWeight:'700'}}>热门菜谱</h1></Divider>
                <div className='hot'>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card
                        hoverable
                        style={cardStyle}
                        cover={<img alt="example" src='http://i3.meishichina.com/attachment/recipe/200910/200910130230340.jpg@!p800' style={{height:380}}/> }
                >
                <Meta title="菜品名" description="简介" />
                </Card>
                    </List.Item>
                )}
                />
                </div>
            </Content>
        )
    }
}
