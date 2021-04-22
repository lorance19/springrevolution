import React, { Component } from 'react';
import { Layout} from 'antd';
import HowitStart from '../contents/home/howitstart'
import {TodayNews} from '../contents/news/todaynews'
import FallenHeros from '../victims/fallenheros'
import Detains from '../victims/detained'

const {  Content } = Layout;

class ChoosenContent extends Component {

    contents = ( x )=>
    {
        if(x=== "howitstart")
            return(<HowitStart/>)
        else if(x==="todaynews")
            return(<TodayNews/>)
        else if(x=== "fallenHeros")
            return (<FallenHeros/>)
        else if(x=== "detained")
            return (<Detains/>)


    }
    
    render() {
        const {userSelect} = this.props; 



        return ( 
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                 
                {this.contents(userSelect)}
                </div>
              </Content>
         );
    }
}
 
export default ChoosenContent;