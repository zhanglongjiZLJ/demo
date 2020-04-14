import React, { Component } from 'react';
import PositionList from './components/position-list/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_obj: {
        title: '最新职位',
        more: '更多'
      },
      position_list: [
        {
          position: '阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里',
          city: '杭州',
          time: '1分钟前'
        }, {
          position: '阿里阿里阿里阿里阿里阿里阿里阿',
          city: '杭州',
          time: '2分钟前'
        }, {
          position: '阿里阿里阿里阿里阿里阿里阿里阿',
          city: '杭州',
          time: '3分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '4分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '5分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '6分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '7分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '8分钟前'
        }, {
          position: '阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里',
          city: '杭州',
          time: '9分钟前'
        }, {
          position: '阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里',
          city: '杭州',
          time: '10分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '11分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '12分钟前'
        }, {
          position: '阿里',
          city: '杭州',
          time: '13分钟前'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <PositionList title_obj={this.state.title_obj} position_list={this.state.position_list}></PositionList>
      </div>
    )
  }
}

export default App;
