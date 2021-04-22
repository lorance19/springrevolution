import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/charts';
import { FormItemPrefixContext } from 'antd/lib/form/context';

import React, { useState } from "react";


let RegionDeathJson = {}
let DateDeathJson = {}

const Graphs= ( props) =>{
    const [data, setData] = useState(props.data);
    const [region, setRegion] = useState([]);
    const [dates, setDates] = useState([]);

    
    let Dates = data.map( function(x) 
    {
        return x.DOI;
    })

    Dates =new Set(Dates);

    
    
    
    

        return (<>
            <h2>Data Visualization... (working on it)</h2>
        </>  );
    
}
 
export default Graphs;