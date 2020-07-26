import React, { Component } from 'react'
import { Steps, PageHeader, Button, message, Form, Input, Cascader } from 'antd';
import Axios from 'axios';
import ArticleEditor from './ArticleEditor'
const { Step } = Steps;

export default class Create extends Component {
    state = {
        current: 0,
        formdata:null,
        content:"",
        options: [
            //默认 ： label 级联菜单的显示内容， value,对应value值， children,    
        ]
    }

    componentDidMount() {
        Axios.get("http://localhost:5000/categories").then(res=>{
            // console.log(res.data) //for 每个title==>babel
            this.setState({
                options:res.data
            })
        })
    }
    

    render() {
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => {
                        // console.log(this.props)
                        this.props.history.goBack() //返回
                    }}
                    title="创建文章"
                    subTitle="This is a subtitle"
                />

                <Steps current={this.state.current}>
                    <Step key="11111" title="基本信息" />
                    <Step key="222222" title="文章内容" />
                    <Step key="33333" title="提交文章" />
                </Steps>

                <div style={{marginTop:"50px",display:this.state.current===0?'block':'none'}}>
                    <Form
                        {...layout}
                        ref="form" //拿到组件对象
                        // layout="vertical"
                        name="form_in_modal"
                        initialValues={{

                        }}
                        className="createKerwinForm"
                    //initailValue设置后，将不会再受控制
                    >
                        <Form.Item
                            name="title"
                            label="文章标题"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the title of collection!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="category"
                            label="文章分类"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the category of collection!',
                                },
                            ]}
                        >
                            {/* 可配置 */}
                            <Cascader options={this.state.options} placeholder="Please select" fieldNames={{
                                label:"title" //title 代替 label属性
                            }}/>
                        </Form.Item>
                    </Form>
                </div>

                <div style={{marginTop:"50px",display:this.state.current===1?'block':'none',height:'500px',overflow:"auto"}}>

                    {/* 1.textarea  2.富文本编辑  */}
                            
                    <ArticleEditor onEvent={(content)=>{
                        // console.log("create组件得到content",content)
                        this.setState({
                            content
                        })
                    }}/>
                </div>

                <div style={{marginTop:"50px",display:this.state.current===2?'block':'none'}}>33333333</div>

                <div className="steps-action">
                    {this.state.current < 2 && (
                        <Button type="primary" onClick={() => this.next()}>
                            下一步
                        </Button>
                    )}
                    {this.state.current === 2 && (
                        <Button type="primary" onClick={this.submit}>
                            提交
                        </Button>
                    )}
                    {this.state.current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    )}
                </div>
            </div>
        )
    }

    submit = ()=>{
        let {username} = JSON.parse(localStorage.getItem("token"))
        //提交给后端，存到数据库
        console.log(this.state.formdata,this.state.content)
        Axios.post("http://localhost:5000/articles",{
            ...this.state.formdata,
            content:this.state.content,
            author:username
        }).then(res=>{
            message.success("你成功了，你知道嘛？")
            this.props.history.push(`/article-manage/list`)
        })
    }

    prev = () => {
        this.setState({
            current: this.state.current - 1
        })
    }
    next = () => {

        if(this.state.current===0){
            //此时表示第一步
            this.refs.form.validateFields().then(values=>{
                console.log(values)
                this.setState({
                    current: this.state.current + 1,
                    formdata:values //收集表单信息， 在最后一步提交给后端
                })
            }).catch(err=>{})
        }else{
            this.setState({
                current: this.state.current + 1
            })
        }
    }
}
