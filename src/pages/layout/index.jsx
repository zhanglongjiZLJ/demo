import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from '../home/index';

class Layout extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/home"></Redirect>
                    <Route exact path="/home" component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}
export default Layout;