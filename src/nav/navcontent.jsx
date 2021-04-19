import React, { Component } from 'react';
import { Layout} from 'antd';
import HowitStart from '../contents/home/howitstart'

const {  Content } = Layout;

class ChoosenContent extends Component {

    contents = ( x )=>
    {
        if(x=== "howitstart")
            return(<HowitStart/>)
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