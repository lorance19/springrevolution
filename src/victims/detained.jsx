
import React, { Component } from 'react';
import {getFallenHeros} from '../dummyvictims'
import Table from '../common/Table'
import { headerStyles } from '../constants/styles'

class Detain extends Component {
    state ={
        list: [],
        pageSize: 10,
        sortColumn: { path: "name",  order: "asc"}
    };
    
    componentDidMount()
    {
        this.setState({list: getFallenHeros()})
    }

    render() { 
        return ( 
            <>
            <h2 style={headerStyles}><b>Detained Count : 2000+</b> </h2> <br/>
            <h3 style={headerStyles}>The following table shows the information of the protesters who had been detained: </h3> 
            <Table list={this.state.list}/>
            </>
         );
    }
}
 
export default Detain;