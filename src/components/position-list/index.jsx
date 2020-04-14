import React from 'react';
import './index.css';


//商品列表
const PositionList = (props) => {
    let { position_list, title_obj } = props;
    return (
        <div className="position-list">
            <div className="header">
                <div>{title_obj.title}</div>
                <div className="more">{title_obj.more}</div>
            </div>
            <ul className="container">
                {
                    position_list.map((item, index) => {
                        return (
                            <li className="position-item" key={index}>
                                <a className="name">{item.position}</a>
                                <div className="city">{item.city}</div>
                                <div className="time">{item.time}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default React.memo(PositionList);

