
import React, { Component } from 'react';
import {getFallenHeros} from '../dummyvictims'
import Table from '../common/Table'
import {symbolColor, headerStyles } from '../constants/styles'
import Graphs from './visualization'

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
                console.log("List size is zero")
        }
        else 
            console.log( "List size is " + this.state.list.length)
    }

    render() { 
        return ( 
            <>
            <h2 style={headerStyles}><b>Death Count : 700+</b> </h2> <br/>
            <h3 style={headerStyles}>The following table shows the information of the protesters who had been shot during protest: </h3> 
            <Table list={this.state.list}/>
            <br/>
            <Graphs data={data}/>
            </>
            
         );
    }
}
 
export default FallenHeros;