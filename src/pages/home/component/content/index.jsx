import React, { Component } from 'react';
import PositionList from '../../../../component/position-list';
import { position_list } from '../../../../util/data';
import './index.scss';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title_obj: {
                title: '最新职位',
                more: '更多'
            }
        }
    }

    render() {
        return (
            <div className="container">
                <PositionList title_obj={this.state.title_obj} position_list={position_list} />
                <div className="card-container">
                    <a className="card-pic pic-1" href="https://www.aliyun.com/careers">
                        <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt="" />
                    </a>
                    <a className="card-pic pic-2" href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?spm=a2obv.11410899.0.xinxipingtai.55ef6c61wQN6rr">
                        <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Content;