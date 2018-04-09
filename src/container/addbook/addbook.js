import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon,SearchBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'
import './addbook.css'

export default class AddBook extends Component {

    constructor(props) {
        super(props)
        this.contactList = this.contactList.bind(this)
    }

    contactList(){

    }


    render() {

        const row = (
            <div className="contact-context">
                <Flex wrap="wrap">
                    <img src={require('../../static/image/head-logo.png')} alt=""/>
                    <p>王某某</p>
                </Flex>
            </div>
        )


        return(
            <div>
                <SearchBar placeholder="Search" />
                <WingBlank>
                    <div className="addbook-head">
                        <Flex justify="between">
                            <Flex.Item>
                                <div className="adbook-headitem">
                                    <i className="iconfont icon-wode" />
                                    <p>手机通讯录</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div className="adbook-headitem">
                                    <i className="iconfont icon-wode" />
                                    <p>我的好友</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div className="adbook-headitem">
                                    <i className="iconfont icon-wode" />
                                    <p>我的群组</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div className="adbook-headitem">
                                    <i className="iconfont icon-wode" />
                                    <p>企业广场</p>
                                </div>
                            </Flex.Item>
                        </Flex>
                    </div>

                    <div>
                        <List>
                            <List.Item
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>教育口科技有限公司</p>
                            </List.Item>
                            <List.Item
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>组织架构</p>
                            </List.Item>
                            <List.Item
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>外部联系人</p>
                            </List.Item>
                            <List.Item
                                thumb={<i className="iconfont icon-wode" />}
                                multipleLine
                                platform="android">
                                <p>创建新的团队</p>
                            </List.Item>
                        </List>
                    </div>


                    <div className="contact-list">
                        <h2 className="contact-title">常用联系人</h2>
                        <div>
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                        </div>
                    </div>
                </WingBlank>
            </div>
        )
    }

}