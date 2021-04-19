import React, { Component } from 'react';
import {symbolColor, headerStyles } from '../../constants/styles'
import {Contents} from '../home/contents.jsx'

const HowitStart =()=> {

        return (
            <div>
                <h2 style={headerStyles}> How it started </h2>
                <Contents/>
            </div>
          );
    
}
 
export default HowitStart;