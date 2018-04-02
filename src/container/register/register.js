import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'
import './register.css'

export default class Register extends Component {

    constructor(props) {
        super(props)
    }

    goBack = ()=> {
        this.props.history.goBack()
    }

    verifCode = ()=> {
        this.props.history.push('/verifcode')
    }

    render() {
        return(
            <div>
                <WingBlank>
                    <NavBar mode="light" icon={<Icon type="left" size="lg"/>} onLeftClick={this.goBack} />
                    <ElementBlank height={90} />
                    <div className="register-title">新用户注册</div>
                    <ElementBlank height={30} />
                    <List>
                        <InputItem placeholder="请输入手机号码">
                            <i className="iconfont icon-phone"></i>
                        </InputItem>
                    </List>
                    <ElementBlank height={50}/>
                    <Button type="primary" onClick={this.verifCode}>下一步</Button>
                    <ElementBlank height={20} />
                </WingBlank>
            </div>
        )
    }

}