import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './index.scss';
import { hotPosition } from '../../../../util/data';

class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState(() => ({
            search: e.target.value
        }))
    }

    onClick(e) {
        //调用搜索接口
    }

    render() {
        const { search } = this.state;
        return (
            <div className="center">
                <div className="bg"></div>
                <div className="index-mid-box">
                    <p className="text">If not now, when?</p>
                    <p className="text">If not me, who?</p>
                    <p className="text last-text">此时此刻，非我莫属！</p>
                    <div className="modal-mask">
                        <Input className="input-sty" placeholder="请输入职位关键词" value={search} onChange={this.onChange}></Input>
                        <Button className="button-sty" type="primary" onClick={this.onClick}>搜索</Button>
                    </div>
                    <div className="hot-search">
                        <span>热门搜索：</span>
                        {
                            hotPosition.length && hotPosition.map((item, index) => {
                                return <a href={item.value} key={index} className="a-sty">{item.value}</a>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Center;