import React, { Component } from 'react'
import { Table, Button, Tag } from 'antd'
import axios from 'axios'
import store from '../../redux/store'
export default class Roles extends Component {
    state = {
        datalist: []
    }

    columns = [
        {
            title: '角色名称',
            dataIndex: 'roleName', //映射原数据的属性
            key: 'roleName'
        },
        {
            title: '操作',
            // dataIndex
            key: 'action',
            render: (obj) => <Button type="danger" onClick={()=>{
                this.handleDelClick(obj.id) //把当前点击的id传给
            }}>delete</Button>
        }
    ]

    handleDelClick = (id)=>{
        console.log("click",id)
        // 1. setState ,列表重新渲染
        // 2. axios.delete 
        
        // 对于原数组进行过滤的操作, fiter 不影响原状态
        let newlist= this.state.datalist.filter(item=>item.id !== id)
        // console.log(newlist,this.state.datalist)
        this.setState({
            datalist:newlist
        })

        //restful 接口
        // axios.delete(`http://localhost:5000/roles/${id}`).then(res=>{
        //     console.log("delete ok");
        // })
    }


    // 1-1 promise风格 依赖于 redux-promise中间件
    // actionPromise = ()=>{
    //     return  axios.get("http://localhost:5000/roles").then(res => {
    //         return {
    //             type:"kerwin_save_rolelist",
    //             payload:res.data
    //         }// action必须有type属性
    //     }) 
    // }

    // 1-2 async风格 依赖于 redux-promise中间件
    // actionAsyncPromise = async ()=>{
    //     let res = await axios.get("http://localhost:5000/roles")

    //     return {
    //         type:"kerwin_save_rolelist",
    //         payload:res.data
    //     }
    // }

    // 2 dispatch传入的是一个函数 依赖于redux-thunk 中间件

    actionThunk = ()=>{
        return (dispatch)=>{
            // console.log(dispatch)
            axios.get("http://localhost:5000/roles").then(res=>{
                dispatch({
                    type:"kerwin_save_rolelist",
                    payload:res.data
                })
            })
        }
    }

    //thunk原理，  判断参数如果是函数，执行函数（store.dispatch）
    //Promise原理， 判断参数如果是promsie对象， promise对象.then(res=>{store.dispatch()}) //支持异步

    // 以上都不是， 走默认的redux 路线，只支持同步
    componentDidMount() {
        // console.log("roleList数据请求")
        //权限的后端接口

        let roleList = store.getState().roleList

        if(roleList.length===0){
            //走一遍逻辑,把数据存储到store中
            // console.log(this.action())
            store.dispatch(this.actionThunk()) //dispath 传入一个promise对象（函数），不支持，只支持最简单的对象，需要借助中间件（middleware）
        }else{
            console.log("使用缓存数据","缓存只是在内存中，页面一刷新就丢了")
            this.setState({
                datalist: roleList
            })
        }

        this.unscribe = store.subscribe(()=>{
            // console.log("role组件",store.getState().roleList)
            this.setState({
                datalist:store.getState().roleList
            })
        })

    }
    componentWillUnmount(){
        this.unscribe();
    }

    render() {
        return (
            <div>
                <Table columns={this.columns} dataSource={this.state.datalist}
                    //rowKey 接受回调函数， 返回值将作为key,理想的key值是item.id
                    rowKey={item => item.id} pagination={{ pageSize: 5 }}
                    //控制表格展开以及展开的内容
                    expandable={{
                        expandedRowRender: (data) => {
                            // console.log(data.roleRight)
                            return data.roleRight.map((item,index) =>
                                <div key={index}>
                                    <b>{item.category}</b>
                                    {
                                        item.list.map(childitem=>
                                           <Tag key={childitem} color="green">{childitem}</Tag>
                                        )
                                    }
                                </div>
                            )
                        }
                    }}

                />
            </div>
        )
    }
}
