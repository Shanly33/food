import React from 'react';
import './App.scss';
import { Layout, Menu} from 'antd';
import {Route,Link,Redirect,Switch}from 'react-router-dom'
import { appRouter } from './routers';
import * as Api from './api'


const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
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
            </Menu>
          </Header>
          <Content >
            {/* 主体内容 */}
            <Switch>
              {
                appRouter.map(route=>{
                  return <Route key={route.path} {...route}/>
                })
              }
              <Redirect to='/404'></Redirect>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design 2018 Created by Ant UED</Footer>
        </Layout>
    </div>
  );
}

export default App;
