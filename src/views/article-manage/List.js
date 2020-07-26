import React, { Component } from 'react'
import { Table, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Axios from 'axios';

export default class List extends Component {
    state = {
        datalist: []
    }

    columns = [
        {
            title: '文章标题',
            dataIndex: 'title', //映射原数据的属性
            key: 'title'
        },
        {
            title: '文章作者',
            dataIndex: 'author', //映射原数据的属性
            key: 'author'
        },
        {
            title: '文章类别',
            dataIndex: 'category', //映射原数据的属性
            key: 'category',
            render: (category) => {
                // console.log(roleState,item)
                return category.join("/")
            }
        },
        {
            title: '操作',
            // dataIndex
            key: 'action',
            render: (obj) => <div>
                <Button shape="circle" icon={<EditOutlined />} onClick={()=>this.handlePreview(obj.id)}/>
                <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={()=>this.handleUpdateClick(obj.id)}/>
                <Button type="danger" shape="circle" icon={<DeleteOutlined />} onClick={()=>this.handleDelClick(obj.id)}/>
            </div>
        }
    ]

    componentDidMount() {
        Axios.get("http://localhost:5000/articles").then(res=>{
            // console.log(res.data)
            this.setState({
                datalist:res.data
            })
        })
    }
    //删除按钮的方法
    handleDelClick  = (id)=>{
        Axios.delete(`http://localhost:5000/articles/${id}`).then(res=>{
            //过滤掉此id对应的数据
            this.setState({
                datalist:this.state.datalist.filter(item=>item.id!==id)
            })    

        })
    }
    //更新按钮的方法
    handleUpdateClick = (id)=>{
        this.props.history.push(`/article-manage/update/${id}`) //必须带id?
    }

    // 预览按钮方法
    handlePreview = (id)=>{
        this.props.history.push(`/article-manage/preview/${id}`) //必须带id?
    }
    

    render() {
        return (
            <div>
               <Button type="primary" onClick={()=>{
                   this.props.history.push("/article-manage/create")
               }}>创建文章</Button>
               <Table columns={this.columns} dataSource = {this.state.datalist}
               rowKey={item=>item.id}
               />
            </div>
        )
    }

    handlePreview=(item)=>{
        // console.log(this.props)
        this.props.history.push(`/article-manage/preview/${item}`);

    }
}
