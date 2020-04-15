import React, { Component } from 'react';
import './index.scss';

//职位列表
class PositionList extends Component {
    timer = null
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        //开始滚动
        this.onMouseLeave();
    }

    //组件销毁 清除定时器 移除滚动监听事件
    componentWillUnmount() {
        clearInterval(this.timer);
        this.divRef.removeEventListener('scroll', this.handleScroll);
    }

    //监听鼠标滚动
    handleScroll() {
        this.setState(() => ({
            scrollTop: this.divRef.scrollTop
        }))
    }
    //鼠标移入职位而列表 清除定时器 开始监听鼠标滚动
    onMouseEnter() {
        this.timer && clearInterval(this.timer);
        this.divRef.addEventListener('scroll', this.handleScroll);
    }

    //鼠标离开职位而列表 移除鼠标滚动事件
    onMouseLeave() {
        this.divRef.removeEventListener('scroll', this.handleScroll);
        this.timer = setInterval(() => {
            this.setState(() => ({
                scrollTop: this.state.scrollTop + 1
            }), () => {
                this.divRef.scrollTop = this.state.scrollTop;
                if (this.state.scrollTop >= this.ulRef.offsetHeight - 250) {
                    this.divRef.scrollTop = 0;
                    this.setState(() => ({
                        scrollTop: 0
                    }))
                }
            })
        }, 30)
    }
    render() {
        let { position_list, title_obj } = this.props;
        return (
            <div className="position-list">
                <div className="header">
                    <div>{title_obj.title}</div>
                    <div className="more">{title_obj.more}</div>
                </div>
                <div ref={(div) => { this.divRef = div }} className="position-list-container" onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                    <ul ref={(ul) => { this.ulRef = ul }} className="position-ul">
                        {
                            position_list.map((item, index) => {
                                return (
                                    <li className="position-item" key={index}>
                                        <a className="name">{item.name}</a>
                                        <div className="city">{item.city}</div>
                                        <div className="time">{item.time}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default PositionList;

