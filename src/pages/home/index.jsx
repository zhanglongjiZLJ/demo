import React, { Component } from 'react';
import './index.scss';
import Header from './component/header';
import Center from './component/center';
import Content from './component/content';
import Footer from './component/footer';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                <Header></Header>
                <Center></Center>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;
