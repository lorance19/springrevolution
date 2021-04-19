import React, { Component } from 'react';
import { Layout, Menu, Image} from 'antd';
import {Nav} from 'react-bootstrap'

import {
  CompassOutlined,
  DollarCircleOutlined ,
  DeleteOutlined ,
  ProfileOutlined ,
  MailOutlined,
  UserDeleteOutlined 
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;
const symbolColor = "#980002";
const iconStyle = {
    color: symbolColor
}

class NavSider extends Component {

   

    render() { 


        return ( <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              backgroundColor: 'white'
            }}
          >
            <div className="logo" />
            
            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}    style = {iconStyle}>
              <SubMenu key="sub1" icon={<CompassOutlined /> } title="Home">
                  
                  <Menu.Item key="1.0" style = {iconStyle}  onClick={()=>this.props.updateUserSelect("howitstart")}> How did it start </Menu.Item>
                  
                  <Menu.Item key="1.1" style = {iconStyle} onClick={()=>this.props.updateUserSelect("aboutus")}> About Us </Menu.Item>
              </SubMenu>
              
              <SubMenu key="sub2" icon={<ProfileOutlined /> } title="News">
                  <Menu.Item key="2.0" style = {iconStyle} onClick={()=>this.props.updateUserSelect("todaynews")}> Today's </Menu.Item>
                  <Menu.Item key="2.1" style = {iconStyle} onClick={()=>this.props.updateUserSelect("morenews")}> More... </Menu.Item>
              </SubMenu>
              
              <SubMenu key="sub3" icon={<UserDeleteOutlined /> } title="Victims">
                  <Menu.Item key="3.0" style = {iconStyle} onClick={()=>this.props.updateUserSelect("fallenHeros")}> Fallen Heros </Menu.Item>
                  <Menu.Item key="3.1" style = {iconStyle} onClick={()=>this.props.updateUserSelect("detained")}> Detained </Menu.Item>
                  <Menu.Item key="3.2" style = {iconStyle} onClick={()=>this.props.updateUserSelect("505")}> 505 </Menu.Item>
              </SubMenu>
              
              <Menu.Item key="3" icon={<DeleteOutlined style = {iconStyle}/>}>
                Dickheads
              </Menu.Item>

              
              <Menu.Item key="5" icon={<MailOutlined style = {iconStyle}/>}>
                Contact Us
              </Menu.Item>
             
              <SubMenu key="sub6" icon={<DollarCircleOutlined /> } title="Donate">
                  <Menu.Item key="6.0" style = {iconStyle}> To CRPH </Menu.Item>
                  <Menu.Item key="6.1" style = {iconStyle}> To Victim's Family </Menu.Item>
                  <Menu.Item key="6.2" style = {iconStyle}> To Us </Menu.Item>
              </SubMenu>
             
              
            </Menu>
          </Sider> );
    }
}
 
export default NavSider;