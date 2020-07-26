import React, { Component } from 'react'
import { Button, Table, Switch, Modal, Form, Input ,Select} from 'antd'
import Axios from 'axios'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Option } = Select;

export default class Users extends Component {

    state = {
        datalist: [],
        isCreate: false,
        isUpdate: false,
        currentId:0
    }

    columns = [
        {
            title: '角色名称',
            dataIndex: 'roleName', //映射原数据的属性
            key: 'roleName'
        },
        {
            title: '用户名',
            dataIndex: 'username', //映射原数据的属性
            key: 'username'
        },
        {
            title: '用户状态',
            dataIndex: 'roleState', //映射原数据的属性
            key: 'roleState',
            render: (roleState, item) => {
                // console.log(roleState,item)
                return <Switch defaultChecked={roleState} disabled={item.default}onChange={()=>this.handleSwitch(item)}></Switch>
            }
            /*
                如果组件的行为，完全受到[状态]的控制， 受控组件
                如果组件的行为， 不受到[状态]的控制， 非受控组件
            */
        },
        {
            title: '操作',
            // dataIndex
            key: 'action',
            render: (obj) => <div>
                <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={obj.default} onClick={()=>this.handleUpdate(obj)}/>
                <Button type="danger" shape="circle" icon={<DeleteOutlined />} disabled={obj.default} onClick={()=>this.handleDelClick(obj.id)}/>
            </div>
        }
    ]

    componentDidMount() {
        Axios.get("http://localhost:5000/users").then(res => {
            console.log(res.data)
            this.setState({
                datalist: res.data
            })
        })
    }

    // 状态打开或关闭
    handleSwitch = (item)=>{
        // console.log(item)
        // let {roleState} = item
        //同步后端
        this.state.datalist.forEach(listitem=>{
            if(listitem.id===item.id){
                listitem["roleState"] = !listitem["roleState"]

                Axios.put(`http://localhost:5000/users/${item.id}`,{
                    ...listitem
                }).then(res=>{console.log("update-ok")})
            }
        })
    }


    //删除方法
    handleDelClick = (id)=>{
        // console.log("del",id)
        //1.同步后端
        //2.同步页面

        Axios.delete(`http://localhost:5000/users/${id}`).then(res=>{
            //删除成功
        })

        this.setState({
            datalist:this.state.datalist.filter(item=>item.id!==id)
        })
    }

    //添加成功方法
    handleAddOk = () => {
        // 1. 校验表单内容，2. 获取表单value 3.隐藏modal
        this.refs.form
            .validateFields()
            .then(values => {
                console.log(values)
                this.refs.form.resetFields(); //重置表单
                this.renderTable(values)
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    renderTable = (values)=>{
        // 1- table更新
        // 2- 数据库
        let {username,password,roleType} = values //解构
        let roleArr = ["小编","管理员","超级管理员"]
        //restful 增===post
        Axios.post("http://localhost:5000/users",{
            username,
            password,
            roleType,
            roleState:false,
            roleName:roleArr[roleType-1] // roleType ,1(小编),2（管理员）,3（超级管理员）
        }).then(res=>{
            console.log(res.data)
            // 模态框消失
            // table更新
            this.setState({
                isCreate:false, //模态框消失
                datalist:[...this.state.datalist,res.data]
            })
        })
    }

    // 更新按钮方法
    handleUpdate = (item)=>{
        // console.log(item)
        
        // Modal 组件 visible => false, true
        // 第一次创建 ，之后就是隐藏和显示
        // setState 同步？？？

        setTimeout(()=>{
            this.setState({
                isUpdate:true,
                currentId:item.id //id 记录此时要更新哪个user
            })
            // 预设数据
            // setFieldsValue 给表单元素提前设置数据
            this.refs.updateForm.setFieldsValue({
                username:item.username,
                password:item.password,
                roleType:item.roleType
            })
        },0)

    }

    // 更新成功方法
    handleUpdateOk = ()=>{
        this.refs.updateForm.validateFields().then(values=>{
            console.log(values)
            this.updateTable(values)
        }).catch(err=>{

        })
    }
    // 更新表格方法
    updateTable = (values)=>{
        let oldItems = this.state.datalist.filter(item=>item.id===this.state.currentId)

        let roleArr = ["小编","管理员","超级管理员"]
        //同步后端
        Axios.put(`http://localhost:5000/users/${this.state.currentId}`,{
            ...oldItems[0],
            ...values,
            roleName:roleArr[values.roleType-1] // roleType ,1(小编),2（管理员）,3（超级管理员）
        }).then(res=>{
            console.log("update-ok",res.data)
            //同步当前页面
            // let newlist =[...this.state.datalist]
            // newlist.forEach((item,index)=>{
            //     if(item.id===res.data.id){
            //         newlist[index] = res.data
            //     }
            // })
            // location.reload();

            let newlist = this.state.datalist.map(item=>{
                if(item.id===res.data.id){
                    return res.data
                }else{
                    return item
                }
            })

            this.setState({
                datalist:newlist,
                isUpdate:false
            })
        })
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={() => {
                    this.setState({
                        isCreate: true
                    })
                }}>添加用户</Button>

                <Table dataSource={this.state.datalist} columns={this.columns}
                    rowKey={item => item.id} />

                {/* 创建的弹出层 */}
                <Modal
                    visible={this.state.isCreate} //是否显示
                    title="添加用户"
                    okText="确定"
                    cancelText="取消"
                    onCancel={() => {
                        this.setState({
                            isCreate: false
                        })
                    }}
                    onOk={this.handleAddOk}
                >
                    <Form
                        ref="form" //拿到组件对象
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{

                        }}
                        //initailValue设置后，将不会再受控制
                    >
                        <Form.Item
                            name="username"
                            label="用户名"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the username of collection!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="密码"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the password of collection!',
                                },
                            ]}
                        >
                            <Input type="password" />
                        </Form.Item>
                        <Form.Item
                            name="roleType"
                            label="角色"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select the roleName of collection!',
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="选择一个角色"
                            >
                                <Option value={3}>超级管理员</Option>
                                <Option value={2}>管理员</Option>
                                <Option value={1}>小编</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>

                {/* <KerwinMal></KerwinMal> */}

                {/* 更新的弹出层 */}
                <Modal
                    visible={this.state.isUpdate} //是否显示
                    title="更新用户"
                    okText="更新"
                    cancelText="取消"
                    onCancel={() => {
                        this.setState({
                            isUpdate: false
                        })
                    }}
                    onOk={this.handleUpdateOk}
                >
                    <Form
                        ref="updateForm" //拿到组件对象
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{

                        }}
                    >
                        <Form.Item
                            name="username"
                            label="用户名"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the username of collection!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="密码"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the password of collection!',
                                },
                            ]}
                        >
                            <Input type="password" />
                        </Form.Item>
                        <Form.Item
                            name="roleType"
                            label="角色"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select the roleName of collection!',
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="选择一个角色"
                            >
                                <Option value={3}>超级管理员</Option>
                                <Option value={2}>管理员</Option>
                                <Option value={1}>小编</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
