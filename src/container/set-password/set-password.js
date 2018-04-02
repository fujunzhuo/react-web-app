import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'

import './set-password.css'


export default class Register extends Component {

    constructor(props) {
        super(props)
    }

    goBack = ()=> {
        this.props.history.goBack()
    }

    goHome = ()=> {
        this.props.history.push('/home')
    }

    render() {
        return(
            <div>
                <WingBlank>
                    <NavBar mode="light" icon={<Icon type="left" size="lg"/>} onLeftClick={this.goBack} >设置密码</NavBar>
                    <ElementBlank height={40} />
                    <div className="setpwd-tips">设置密码后，您可以使用手机号登录教育口电脑版和手机版</div>
                    <ElementBlank height={10} />
                    <div className="setpwd-tips">手机号码：+86 13485244567</div>
                    <ElementBlank height={30} />
                    <List>
                        <InputItem placeholder="请输入您要设置的密码" type="password">
                            <i className="iconfont icon-password"></i>
                        </InputItem>
                        <ElementBlank height={10} />
                        <InputItem placeholder="再次输入密码" type="password">
                            <i className="iconfont icon-password"></i>
                        </InputItem>
                    </List>
                    <ElementBlank height={50}/>
                    <Button type="primary" onClick={this.goHome}>进入教育口</Button>
                    <ElementBlank height={20} />
                </WingBlank>
            </div>
        )
    }

}