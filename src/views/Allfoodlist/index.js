import React, { Component } from 'react'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import './index.scss';
import Axios from 'axios';

const listData = [];
for (let i = 0; i < 23; i++) {
listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
});
}
const IconText = ({ icon, text }) => (
    <Space>
    {React.createElement(icon)}
    {text}
    </Space>
);

export default class index extends Component {
    constructor(){
        super()
        this.state={
            foods:[]
        }
    }
    componentDidMount(){
        this.setState({
            
        })
        this.getFoods()
    }
    getFoods=()=>{
        Axios.get("http://localhost:8888/food").then(res=>{
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="list-content">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
            />
            </div>
        )
    }
}
