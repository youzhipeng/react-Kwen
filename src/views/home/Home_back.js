import React, { Component } from 'react'
// import axios from 'axios'
import { Button } from 'antd';

class Child extends Component{

    componentDidMount() {
        console.log("子组件得到",this.props.content)
    }

    componentWillUnmount(){
        console.log("子组件销毁")
    }
    

    render(){
        return <div>
            child-<button onClick={()=>{
                this.props.onEvent();
            }}></button>
        </div>
    }
}

export default class Home extends Component {

    state = {
        content:"",
        key:1
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                content:"<p>1111111111111</p>",
                key:2
            })
        },5000)


        // axios.get("/ajax/mostExpected?ci=10&limit=10&offset=0&token=&optimus_uuid=43388C403C4911EABDC9998C784A573A4F64A16AA5A34184BADE807E506D749E&optimus_risk_level=71&optimus_code=10").then(res=>{
        //     console.log(res.data)
        // })
        // axios.get("http://www.mei.com/appapi/search/searchFind/v3").then(res=>{
        //     console.log(res.data)
        // })

        //json-server 模拟了一套 Restful api接口

        // get ->查
        // axios.get("http://localhost:5000/list?author=tiechui").then(res=>{
        //     console.log(res.data)
        // })

        // post ->增
        // axios.post("http://localhost:5000/list",{
        //     title:"文章-2",
        //     author:"tiechui",
        //     content:"2222222"
        // }).then(res=>{
        //     console.log(res.data)
        // })


        // put -->更新

        // axios.put("http://localhost:5000/list/1",{
        //     "title": "文章-1-update",
        //     "author": "kerwin-update",
        //     "content": "111111111111111-update",
        // }).then(res=>{
        //     console.log(res.data)
        // })

        // delete --->删除
        // axios.delete("http://localhost:5000/list/1").then(res=>{
        //     console.log(res.data)
        // })
    }
    

    render() {
        return (
            <div>
                <div className="kerwinactive">home</div>
                <Button type="primary">Primary</Button>
                <Child content={this.state.content} key={this.state.key} onEvent={()=>{
                    console.log("父组件定义的")
                }}/>
            </div>
        )
    }
}
/*
  diff 应用？？？？

  老的vdom : child key=1 content=""

  新的vdom : child key=2 conetnt="<p>1111111111111111</p>"
*/