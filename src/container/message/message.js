import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon,SearchBar,SwipeAction} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'
import './message.css'
import ReactDOM from 'react-dom';

import { ListView } from '../../component/'


export default class Message extends Component {

    constructor(props) {
        super(props)
    }

    goBack = ()=> {
        this.props.history.goBack()
    }

    verifCode = ()=> {
        this.props.history.push('/verifcode')
    }

    renderRow = ()=>(
        <div>

        <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
                {
                    text: '置顶',
                    onPress: () => console.log('cancel'),
                    style: { backgroundColor: '#ddd', color: 'white',width:70 },
                },
                {
                    text: '删除',
                    onPress: () => console.log('delete'),
                    style: { backgroundColor: '#F4333C', color: 'white' ,width:70 },
                },
            ]}
            onOpen={() => console.log('global open')}
            onClose={() => console.log('global close')}>
            <WingBlank>
                <div className="msg-row">
                    <div className="msg-row-img">
                        <img src={require('../../static/image/head-logo.png')} />
                    </div>
                    <div className="msg-row-right">
                        <div className="msg-row-rtdiv">
                            <div className="msg-row-rtleft">
                                <h2>鹏博软件沟通群</h2>
                                <div className="msg-row-rticon">企</div>
                            </div>
                            <div className="msg-row-rtright">上午9:07</div>
                            <p className="clear"></p>
                        </div>
                        <div className="msg-row-rbtext">[Tower任务]教育口平台 项目日报</div>
                    </div>
                </div>
            </WingBlank>
        </SwipeAction>
        <div className="dividing-line"></div>
        </div>

    )

    render() {
        return(
            <div>
                <SearchBar placeholder="Search" />
                <List>
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                    {this.renderRow()}
                </List>
            </div>
        )
    }

}

