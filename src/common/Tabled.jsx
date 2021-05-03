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
        title: 'Sex/Age',
        render: (record) => record.Sex.Age,
        sorter: (a, b) => {
            let x= a.Sex.Age.charAt(0) 
            let y= b.Sex.Age.charAt(0)

            return x>y
        },
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Date of Arresst',
        dataIndex: 'DOA',
        sorter: (a,b) => {
            let x = new Date(a.DOA);
            let y= new Date(b.DOA);
            return x.getMonth()>y.getMonth();
        },
        sortDirections: ['descend', 'ascend'],

        
    },
    {
        title: 'Current Condition',
        dataIndex: 'CC',
        sorter: (a, b) => a.CC > b.CC,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Address',
        dataIndex: 'Address',
        sorter: (a, b) => a.Address > b.Address,
        sortDirections: ['descend', 'ascend'],
    }
]



class TableBodyD extends Component {
    
    
    

    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    render() {
        
        return (<Table columns={columns} dataSource={this.props.list} onChange={this.onChange} />  );
    }
}
 
export default TableBodyD;