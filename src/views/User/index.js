import React, { Component } from 'react'
import './index.scss'
export default class user extends Component {
    render() {
        return (
            <div className='user-page'>
                <div className='user-box'>
                    <p className='user-information'>用户信息</p>
                    <div className='user-avatar'>头像</div>
                    <div className='user-text user-name'><p className='text'>用户名：</p>
                    <button className='change change-name'>修改</button>
                    <div className='show name-show'>具体用户名</div></div>
                    <div className='user-text user-email'><p className='text'>&nbsp;&nbsp;&nbsp;邮箱：</p>
                    <button className='change change-email'>修改</button>
                    <div className='show email-show'>具体邮箱</div>
                    </div>
                    <div className='user-text user-phone'><p className='text'>&nbsp;&nbsp;&nbsp;电话：</p>
                    <button className='change change-phone'>修改</button>
                    <div className='show phone-show'>具体电话</div></div>
                </div>
            </div>
        )
    }
}
