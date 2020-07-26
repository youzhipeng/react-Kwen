import React, { Component } from 'react'
import { Table,Tag } from 'antd'
import axios from 'axios'

export default class Rights extends Component {

    state = {
        datalist: []
    }

    columns = [
        {
            title: '#',
            dataIndex: 'id', //映射原数据的属性
            key: 'id',
            render: id => <b>{id}</b> //定制每个td 的样式
        },
        {
            title: '权限名称',
            dataIndex: 'title', //映射原数据的属性
            key: 'age',
        },
        {
            title: '权限等级',
            dataIndex: 'grade', //映射原数据的属性
            key: 'grade',
            render: grade => {
                /*
                    let obj = {
                        a:"green",
                        b:"orange",
                        c:"red"
                    }
                */
                let arr = ["green","orange","red"]
                return <Tag color={arr[grade-1]}>{grade}</Tag>
            }
        }
    ]

    // componentDidMount() {
    //     //权限的后端接口
    //     axios.get("http://localhost:5000/rights").then(res => {
    //         // console.log(res.data)
    //         this.setState({
    //             datalist: res.data
    //         })
    //     })
    // }

    async componentDidMount() {
        //权限的后端接口
        let res = await axios.get("http://localhost:5000/rights")

        this.setState({
            datalist: res.data
        })
    }

    render() {
        return (
            <div>
                <Table columns={this.columns} dataSource={this.state.datalist}
                    //rowKey 接受回调函数， 返回值将作为key,理想的key值是item.id
                    rowKey={item => item.id} pagination={{ pageSize: 5 }} />
            </div>
        )
    }
}
