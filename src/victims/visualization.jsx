import { Line, Column, Bar  } from '@ant-design/charts';
import { FormItemPrefixContext } from 'antd/lib/form/context';
import React, { useState } from "react";
import _ from "lodash"
import {symbolColor, headerStyles} from '../constants/styles'

let RegionDeathJson = {}
let DateDeathJson = {}

const Graphs=  React.memo(( props) =>{
    const [data, setData] = useState(props.data)
    const [count, setCount] = useState(0);

    
    let DeathByAge = _.map(data, function (x) {
      if(x.Age == -1 )
        return   {Range: "Unknown", Age: x.Age} 
      if(x.Age > 0 && x.Age <= 10 )
        return  {Range: "1-10", Age: x.Age}
      if(x.Age > 11 && x.Age <= 20 )
        return  {Range: "11-20", Age: x.Age}
      if(x.Age > 21 && x.Age <= 30 )
        return  {Range: "21-30", Age: x.Age}
      if(x.Age > 31 && x.Age <= 40 )
        return  {Range: "31-40", Age: x.Age}
      if(x.Age > 41 && x.Age <= 50 )
        return  {Range: "41-50", Age: x.Age}
      if(x.Age > 51 && x.Age <= 60 )
        return  {Range: "51-60", Age: x.Age}
      if(x.Age > 61 && x.Age <= 70 )
        return  {Range: "61-70", Age: x.Age}
      else 
        return  {Range: "70+", Age: x.Age}

    }) 
    let DeathByAge2 = _.map(DeathByAge, function (x)
    {
      const C =  _.filter(DeathByAge, function (y){
        return y.Range === x.Range
      })
      return Object.assign(x,  {Count: C.length} )
    })
    
    DeathByAge2 = _.sortBy(DeathByAge2, function(x){
      return x.Age
    })

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
    
        var config3 = {
          data: DeathByAge2,
          xField: 'Count',
          yField: 'Range',
          color : symbolColor
        };

        return (<>
             <h3 style= {headerStyles}> Total Deaths ( By Regions ) </h3>
             <Column {...config} />
             <br/>
             <h3 style= {headerStyles}> Total Deaths ( By Dates) </h3>
             <Column {...config2}/>
             <br/>
             <h3 style= {headerStyles}> Total Deaths ( By Ages) </h3>
             <Bar {...config3} />;
        </>  );
    
})
 
 
export default Graphs;


