import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'


export default class VerifCode extends Component {

    constructor(props) {
        super(props)
    }

    goBack = ()=> {
        this.props.history.goBack()
    }

    setPassword = ()=> {
        this.props.history.push('/set-password')
    }


    render() {
        return(
            <div>
                <WingBlank>
                    <NavBar mode="light" icon={<Icon type="left" size="lg"/>} onLeftClick={this.goBack} />
                    <ElementBlank height={90} />
                    <div className="register-title" style={{paddingLeft:0}}>请输入验证码</div>
                    <ElementBlank height={10} />
                    <div>验证码已发送至手机：+86 13758965412</div>
                    <ElementBlank height={30} />
                    <List>
                        <InputItem placeholder="请输入验证码">
                            <i className="iconfont icon-securityCode-b"></i>
                        </InputItem>
                    </List>
                    <ElementBlank height={50}/>
                    <Button type="primary" onClick={this.setPassword}>下一步</Button>
                    <ElementBlank height={20} />
                </WingBlank>
            </div>
        )
    }

}