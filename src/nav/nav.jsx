import React, { Component } from 'react';
import { Layout} from 'antd';

import NavSider from './navsider';
import NavContent from './navcontent'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import logo from '../image/logo.png';

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
          <Router>
            <NavSider  test = {userSelection} updateUserSelect={this.updateSelection}/>
            <Layout className="site-layout" style={{ marginLeft: 200 , backgroundColor: 'white'}}>
              <Header className="site-layout-background" style={{ padding: 0, backgroundColor: symbolColor, textAlign: 'center', color: 'white'} } >
                  <img src={logo} alt="Logo" width="300" height="58"/>
              </Header>
              
              <NavContent userSelect = {userSelection}/> 
              
              <Footer style={{ textAlign: 'center' }}>Created by MMPA</Footer>
            </Layout>
            </Router>
          </Layout>
        )
    }
}
 
export default Navbar;
