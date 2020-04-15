import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Layout from './pages/layout/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Layout />)
    }
}

export default App;
