import React, { Component } from 'react';
import { Layout} from 'antd';
import HowitStart from '../contents/home/howitstart'
import Contact from '../contact/contact'
// import {TodayNews} from '../contents/news/todaynews'
import FallenHeros from '../victims/fallenheros'
import DetainStatus from '../victims/detained'
// import {symbolColor, headerStyles } from '../constants/styles'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const {  Content } = Layout;

class ChoosenContent extends Component {
    
    render() {



        return ( 
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                 
                <Switch>
                    <Route path="/howitstart" component={HowitStart}/>
                    <Route path="/fallenheros" component= {FallenHeros} />
                    <Route path="/detainStatus" component= {DetainStatus} />
                    <Route path="/contact" component= {Contact} />
                    <Route path="/source"  component={() => { 
                            window.location.href = 'https://aappb.org/'; 
                            return null;
                    }} />
                    <Route path=""  component={HowitStart} />
                    
                </Switch>
                </div>
               
              </Content>
         );
    }
}
 
export default ChoosenContent;