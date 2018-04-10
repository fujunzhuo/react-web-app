import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon,SearchBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'

import './work.css'

export default class Work extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div>
                <WhiteSpace />
                <div className="work-head">
                    <img src={require('../../static/image/word-head.png')} className="work-head-img"/>
                </div>
                <div className="addbook-head">
                    <Flex justify="between">
                        <Flex.Item>
                            <div className="adbook-headitem">
                                <p className="work-approval">0</p>
                                <p>待我审批</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="adbook-headitem">
                                <p className="work-approval">1</p>
                                <p>出勤天数</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="adbook-headitem">
                                <i className="iconfont icon-wode" />
                                <p>通用审批</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="adbook-headitem">
                                <i className="iconfont icon-wode" />
                                <p>日报</p>
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>

                    <div className="work-common-container">
                        <h2 className="work-common-app">常用应用</h2>
                        <div className="work-app-list">
                            <Flex justify="between">
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>公告</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>日志</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>云盘</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>审批</p>
                                </Flex.Item>
                            </Flex>
                        </div>
                        <div className="work-app-list">
                            <Flex justify="between">
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>签到</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>校园邮</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>红圈营销</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>易快报销</p>
                                </Flex.Item>
                            </Flex>
                        </div>
                    </div>

                    <div className="work-common-container">
                        <h2 className="work-common-app">其他应用</h2>
                        <div className="work-app-list">
                            <Flex justify="between">
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>考勤打卡</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>微社区</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>CRM</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>视频会议</p>
                                </Flex.Item>
                            </Flex>
                        </div>
                        <div className="work-app-list">
                            <Flex justify="between">
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>电话会议</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>Tower</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>智能报表</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>运动</p>
                                </Flex.Item>
                            </Flex>
                        </div>

                        <div className="work-app-list">
                            <Flex justify="between">
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>众包</p>
                                </Flex.Item>
                                <Flex.Item>
                                    <div className="work-app-icon"></div>
                                    <p>全部</p>
                                </Flex.Item>
                                <Flex.Item>
                                </Flex.Item>
                                <Flex.Item>
                                </Flex.Item>
                            </Flex>
                        </div>
                    </div>


            </div>
        )
    }

}