import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
//import {register} from '../../store/user.store'
import './login.css'

import {login} from '../../store/login/action'

import {ElementBlank} from '../../component'

@connect(
    state => state.login,
    { login }
)
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account:'',
            password:''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(key,val){
        this.setState({[key]:val})
    }

    register = ()=> {
        this.props.history.push('/register')
    }

    handleLogin(){
        this.props.login(this.state)
        //this.props.history.push('/home')
    }
    render() {
        const { msg } = this.props
        return(
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <ElementBlank/>
                <WingBlank>
                    <Flex justify="end">
                        <Button className="register-btn" onClick={this.register}>注册</Button>
                    </Flex>
                    <ElementBlank height={100} />

                    <List>
                        <InputItem placeholder="请输入手机号码"
                                   onChange={v=>this.handleChange('account',v)}>
                            <i className="iconfont icon-phone"></i>
                        </InputItem>
                        <ElementBlank/>
                        <InputItem placeholder="请输入密码"
                                   type="password"
                                   onChange={v=>this.handleChange('password',v)}>
                            <i className="iconfont icon-password"></i>
                        </InputItem>
                    </List>
                    {
                        msg ?
                            <div>
                                <ElementBlank height={10}/>
                                <p className="error-msg">{msg}</p>
                                <ElementBlank height={10}/>
                            </div> :
                            <ElementBlank height={30}/>
                    }
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <ElementBlank height={20} />
                    <Flex justify="between">
                        <Button className="register-btn" style={{border:'none'}}>忘记密码？</Button>
                        <Button className="register-btn" style={{border: 'none'}}>切换邮箱登录</Button>
                    </Flex>
                </WingBlank>
                <WhiteSpace size="lg" />
            </div>
        )
    }

}