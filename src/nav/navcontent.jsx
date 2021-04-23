import React, { Component } from 'react';
import { Layout} from 'antd';
import HowitStart from '../contents/home/howitstart'
import {TodayNews} from '../contents/news/todaynews'
import FallenHeros from '../victims/fallenheros'
import Detains from '../victims/detained'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
const {  Content } = Layout;

class ChoosenContent extends Component {
    
    render() {
        const {userSelect} = this.props; 



        return ( 
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                 
                <Switch>
                    <Route exact path="/howitstart"><HowitStart/> </Route>
                    <Route path="/fallenheros"> <FallenHeros /></Route>
                    <Route path=""><HowitStart/> </Route>
                    
                </Switch>
                </div>
              </Content>
         );
    }
}
 
export default ChoosenContent;