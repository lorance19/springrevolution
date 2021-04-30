import { Line, Column } from '@ant-design/charts';
import { FormItemPrefixContext } from 'antd/lib/form/context';
import React, { useState } from "react";
import _ from "lodash"
import {symbolColor, headerStyles} from '../constants/styles'

let RegionDeathJson = {}
let DateDeathJson = {}

const Graphs=  React.memo(( props) =>{
    const [data, setData] = useState(props.data)
    const [count, setCount] = useState(0);

    
    let DeathByState = _.map(data,function (x)
    {
      const DeathCount =  _.filter(data,  { 'State': x.State })
      const DeathCount2 =  _.filter(data,  { 'DOI': x.DOI })
      return  Object.assign(x,  {totalDeathByState:DeathCount.length , totalDeathByDate:DeathCount2.length} )
    })

   
    var config = {
      data: DeathByState,
      xField: 'State',
      yField: 'totalDeathByState',
      color : symbolColor
      };
    
     
  

      var config2 = {
        data: DeathByState,
        xField: 'DOI',
        yField: 'totalDeathByDate',
        color : symbolColor
        };
   

        return (<>
             <h3 style= {headerStyles}> Total Deaths ( By Regions ) </h3>
             <Column {...config} />
             <br/>
             <h3 style= {headerStyles}> Total Deaths ( By Dates) </h3>
             <Column {...config2}/>
        </>  );
    
})
 
 
export default Graphs;