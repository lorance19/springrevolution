
import React, { Component } from 'react';
import Table from '../common/Table'
import {headerStyles } from '../constants/styles'
import Graphs from './visualization'
 import {
   
    Link
  } from "react-router-dom";



  let  data = require('../data.json'); 

class FallenHeros extends Component {
    state ={
        list: [],
        
    };
    
    componentDidMount()
    {
        if(this.state.list.length=== 0 )
        {
                this.setState({list: data})
        }
      
    }

    render() { 
        return ( 
            <>
            <h2 style={headerStyles}><b>Death Count : {this.state.list.length + 100}</b> </h2> <br/>
            <h3 style={headerStyles}>The following table shows the information of the protesters who had been shot during protest: </h3> 
            <Table list={this.state.list}/>
            <br/>
            <Graphs data={data}/>
            <br/>
            <Link style={headerStyles} target={"_blank"} to="/source">Source:https://aappb.org/</Link>
            </>

            
         );
    }
}
 
export default React.memo(FallenHeros);