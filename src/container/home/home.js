import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,Flex,NavBar,Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { TabBar } from 'antd-mobile';

import './home.css'


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'message',
            hidden: false,
            fullScreen: false
        }
    }

    componentWillMount(){

    }

    componentDidMount(){
        //console.log(this.state)
    }

    componentWillReceiveProps(nextProps){

    }


    render() {
        console.log('render' ,this.state)

        const { selectedTab } = this.state
        return (
            <div className="home-container">
                <NavBar
                    mode="dark"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Button className="scan-qrcode" icon={<i className="iconfont icon-saomiao" />} />,
                        <Button className="add-friends" icon={<i className="iconfont icon-tianjia" />} />
                    ]}
                >教育口</NavBar>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden} >
                    <TabBar.Item
                        title="消息"
                        key="message"
                        icon={<i className="iconfont icon-xiaoxi1" />}
                        selectedIcon={ <i className="iconfont icon-xiaoxi" />}
                        selected={ selectedTab === 'message'}
                        onPress={() => {this.setState({selectedTab: 'message'});}}>
                        消息消息消息
                    </TabBar.Item>
                    <TabBar.Item
                        title="校园邮"
                        key="email"
                        icon={<i className="iconfont icon-youjian" />}
                        selectedIcon={ <i className="iconfont icon-youjian2" />}
                        selected={selectedTab === 'email'}
                        onPress={() => {this.setState({selectedTab: 'email'});}}>
                        校园邮校园邮校园邮
                    </TabBar.Item>
                    <TabBar.Item
                        title="工作"
                        key="work"
                        icon={<i className="iconfont icon-gongzuoshi" />}
                        selectedIcon={ <i className="iconfont icon-gongzuoshi1" />}
                        selected={selectedTab === 'work'}
                        onPress={() => {this.setState({selectedTab: 'work'});}}>
                        工作工作工作
                    </TabBar.Item>
                    <TabBar.Item
                        title="通讯录"
                        key="addbook"
                        icon={<i className="iconfont icon-tongxunlu01" />}
                        selectedIcon={<i className="iconfont icon-tongxunluintouch01" />}
                        selected={selectedTab === 'addbook'}
                        onPress={() => {this.setState({selectedTab: 'addbook'});}}>
                        通讯录通讯录通讯录
                    </TabBar.Item>
                    <TabBar.Item
                        title="我的"
                        key="my"
                        icon={<i className="iconfont icon-wode" />}
                        selectedIcon={ <i className="iconfont icon-wode-active" />}
                        selected={selectedTab === 'my'}
                        onPress={() => {this.setState({selectedTab: 'my'});}}>
                        我的我的我的
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}