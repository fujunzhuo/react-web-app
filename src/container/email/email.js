import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace,Tabs, Button, Radio,Flex,NavBar,Icon,SearchBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ElementBlank} from '../../component'
import './email.css'

export default class Email extends Component {
    renderContent = tab => {
        console.log(tab.title,tab)
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <p>Content of {tab.title}</p>
            </div>
        );

    }


    render() {
        const tabs = [
            { title: '日程' },
            { title: 'DING' },
            { title: '任务' },
            { title: '会议' },
            { title: '钉住' },
            { title: '回收站' }
        ];

        return (
            <div>
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    {this.renderContent}
                </Tabs>
            </div>
        );
    }
}





