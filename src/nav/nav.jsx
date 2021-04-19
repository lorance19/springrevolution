import React, { Component } from 'react';
import { Layout, Image} from 'antd';

import NavSider from './navsider';
import NavContent from './navcontent'



const { Header, Content, Footer } = Layout;
const symbolColor = "#980002";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        userSelection : "howitstart"
     }
    }

     
     updateSelection =text=>
     {
         this.setState(()=>{ 
             return {userSelection: text}
          });
     }
     
    render() { 
        
        const {userSelection} = this.state;
        console.log("this is userSelection: " + userSelection)
        return (   
        <Layout>
            <NavSider  test = {userSelection} updateUserSelect={this.updateSelection}/>
            <Layout className="site-layout" style={{ marginLeft: 200 , backgroundColor: 'white'}}>
              <Header className="site-layout-background" style={{ padding: 0, backgroundColor: symbolColor, textAlign: 'center', color: 'white'} } >
                    Nway Oo Taw Lan Yay Logo
              </Header>
              <NavContent userSelect = {userSelection}/> 
              
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        )
    }
}
 
export default Navbar;
