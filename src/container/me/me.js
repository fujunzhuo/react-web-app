import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon,SearchBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'

import './me.css'

export default class AddBook extends Component {

    constructor(props) {
        super(props)
        this.contactList = this.contactList.bind(this)
    }

    contactList(){

    }


    render() {



        return(
            <div>

                    <div className="me-header">

                        <div className="me-head-text">
                            <Flex justify="between" align="start">
                                <div className="me-head-uname">王某某</div>
                                <div className="me-head-logo">王某</div>
                            </Flex>
                        </div>
                        <div className="me-company">
                            <Flex>
                                <div>教育口科技有限公司</div>
                                <Icon type="right" />
                            </Flex>
                        </div>
                        <div className="me-work-state">添加工作状态...</div>

                    </div>


                    <div>
                        <List>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>教育口指数</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>我的客服</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>学习中心</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>福利社</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>校园邮</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>云盘</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>教育口卡</p>
                            </List.Item>
                            <div style={{backgroundColor:'#F5F5F5',height:10}}></div>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>红包</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>收藏</p>
                            </List.Item>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>邀请</p>
                            </List.Item>
                            <div style={{backgroundColor:'#F5F5F5',height:10}}></div>
                            <List.Item
                                arrow="horizontal"
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>设置</p>
                            </List.Item>
                        </List>
                    </div>


            </div>
        )
    }

}