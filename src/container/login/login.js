import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
//import {register} from '../../store/user.store'
import './login.css'

import {ElementBlank} from '../../component'


export default class Login extends Component {

    constructor(props) {
        super(props)
    }

    register = ()=> {
        this.props.history.push('/register')
    }

    login = ()=> {
        this.props.history.push('/home')
    }

    render() {
        return(
            <div>
                <ElementBlank/>
                <WingBlank>
                    <Flex justify="end">
                        <Button type="ghost" inline size="small" className="am-button-borderfix border-none" onClick={this.register}>注册</Button>
                    </Flex>
                    <ElementBlank height={100} />

                    <List>
                        <InputItem placeholder="请输入手机号码">
                            <i className="iconfont icon-phone"></i>
                        </InputItem>
                        <ElementBlank/>
                        <InputItem placeholder="请输入密码" type="password">
                            <i className="iconfont icon-password"></i>
                        </InputItem>
                    </List>


                    <ElementBlank height={30}/>
                    <Button type="primary" onClick={this.login}>登录</Button>
                    <ElementBlank height={20} />
                    <Flex justify="between">
                        <Button type="ghost" inline size="small" className="am-button-borderfix border-none" style={{border:'none'}}>忘记密码？</Button>
                        <Button type="ghost" inline size="small" className="am-button-borderfix border-none" style={{border: 'none'}}>切换邮箱登录</Button>
                    </Flex>
                </WingBlank>
                <WhiteSpace size="lg" />
            </div>
        )
    }

}