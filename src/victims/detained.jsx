
import React, { Component } from 'react';
import {getFallenHeros} from '../dummyvictims'
import Tabled from '../common/Tabled'
import { headerStyles } from '../constants/styles'

let  data = require('../Detain.json'); 
class Detain extends Component {
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
            <h2 style={headerStyles}><b>Detained : {this.state.list.length} </b> </h2> <br/>
            <h3 style={headerStyles}>The following table shows the information of the protesters who had been detained: </h3> 
            <Tabled list={this.state.list}/>
            </>
         );
    }
}
 
export default React.memo(Detain)