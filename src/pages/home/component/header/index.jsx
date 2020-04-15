import React, { Component } from 'react';
import { Menu, Divider } from 'antd';
import { Link } from "react-router-dom";
import './index.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(() => ({
            current: e.key,
        }));
    }

    render() {
        const { current } = this.state;
        return (
            <div className="nav">
                <div className="ali-group">
                    <a href="https://job.alibaba.com/zhaopin/index.htm?spm=a2obv.11410899.0.0.600f6c61XE2eXL">
                        <img className="ali-icon" src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" />
                    </a>
                    <Divider type="vertical" style={{ height: '20px' }}></Divider>
                    <span className="text">社招官网</span>
                </div>
                <Menu
                    theme="dark"
                    onClick={this.handleClick}
                    selectedKeys={current}
                    mode="horizontal"
                    className="menu"
                >
                    <Menu.Item key="home">
                        <Link to="/home">首&nbsp;&nbsp;页</Link>
                    </Menu.Item>
                    <Menu.Item key="shehuizhaopin">
                        <a href="https://job.alibaba.com/zhaopin/positionList.htm?spm=a2obv.11410899.0.0.476d6c61PGf1HJ">社会招聘</a>
                    </Menu.Item>
                    <Menu.Item key="xiaoyuanzhaopin">
                        <a href="https://campus.alibaba.com?spm=a2obv.11410899.0.0.55ef6c619ivl57">校园招聘</a>
                    </Menu.Item>
                    <Menu.Item key="liaojieali">
                        <a href="https://job.alibaba.com/zhaopin/about.htm?spm=a2obv.11875486.0.0.509c298ehiMGS1">了解阿里</a>
                    </Menu.Item>
                    <Menu.Item key="gerenzhongxin">
                        <a href="https://job.alibaba.com/zhaopin/apply.htm?spm=a2obv.11875486.0.0.7d56298eYNkqdR">个人中心</a>
                    </Menu.Item>
                </Menu>
                <div className="login">
                    <span>欢迎来到阿里巴巴集团招聘！</span>
                    <a href="https://job.alibaba.com/zhaopin/apply.htm?spm=a2obv.11875486.0.0.7d56298eYNkqdR">登录</a>
                    <Divider type="vertical"></Divider>
                    <a href="http://member1.taobao.com/member/newbie.htm?spm=a2obv.11410899.0.0.476d6c61PGf1HJ">注册</a>
                </div>
            </div>
        )
    }
}

export default Header;