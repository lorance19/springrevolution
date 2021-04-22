import React, { Component } from 'react';
import _ from "lodash"
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'Name',
        sorter: (a, b) => a.Name > b.Name ,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Age',
        dataIndex: 'Age',
        sorter: (a, b) => a.Age - b.Age,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Sex',
        dataIndex: 'Sex',
        sorter: (a, b) => a.Sex > b.Sex,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Date',
        dataIndex: 'DOI',
        sorter: (a,b) => {
            let x = new Date(a.DOI);
            let y= new Date(b.DOI);
            return x.getMonth()>y.getMonth();
        },
        sortDirections: ['descend', 'ascend'],

        
    },
    {
        title: 'Organization',
        dataIndex: 'Organization',
        sorter: (a, b) => a.Organization.length - b.Organization.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'State',
        dataIndex: 'State',
        sorter: (a, b) => a.State.length - b.State.length,
        sortDirections: ['descend', 'ascend'],
    }
]


class TableBody extends Component {
    
    
    

    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    render() {
        
        return (<Table columns={columns} dataSource={this.props.list} onChange={this.onChange} />  );
    }
}
 
export default TableBody;