import React, { Component } from 'react'
import {Table} from 'antd'

export default class Rights extends Component {

    state = {
        datalist:[
            {
                name:"kerwin",
                age:100,
                // key:1
            },
            {
                name:"xiaoming",
                age:18,
                // key:2
            },
            {
                name:"tiechui",
                age:28,
                // key:3
            }
        ]
    }

    columns = [
        {
            title: '姓名',
            dataIndex: 'name', //映射原数据的属性
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age', //映射原数据的属性
            key: 'age',
        }
    ]

    render() {
        return (
            <div>
                <Table columns={this.columns}  dataSource={this.state.datalist} 
                //rowKey 接受回调函数， 返回值将作为key,理想的key值是item.id
                rowKey={item=>item.name}/>        
            </div>
        )
    }
}
