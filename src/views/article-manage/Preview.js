import React, { Component } from 'react'
import Axios from 'axios'
import {PageHeader} from 'antd'

export default class Preview extends Component {
    state = {
        content:""
    }

    componentDidMount() {
        //获取传来的id, 利用id axios请求后端数据， 渲染页面
        let id = this.props.match.params.myid
        Axios.get(`http://localhost:5000/articles/${id}`).then(res=>{
            console.log(res.data)

            this.setState({
                content:res.data.content
            })
        })
    }
    
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => {
                        // console.log(this.props)
                        this.props.history.goBack() //返回
                    }}
                    title="预览"
                    subTitle="This is a subtitle"
                />

                <div dangerouslySetInnerHTML={{__html:this.state.content}} ></div>
                {/* {this.state.content} */}
            </div>
        )
    }
}

/*
    data:{
        html:"<p>11111111<alert>攻击</alert></p>"
    }


    {{html}}

    v-html=  "html"
*/