import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

    state = {
        myname: "kerwin",
        list: []
    }

    componentWillMount() {
        console.log("componentWillMount", "初始化状态")
        // new Swiper
        this.setState({
            myname: "kerwin-1111"
        })
    }
    render() {
        console.log("render")
        // this.setState //多次
        // this.setState({
        //     myname:"kerwin-2222"
        // })
        return (
            <div>
                hello-{this.state.myname}

                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item.id}>{item.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount", "事件监听，数据请求","setInterval")

        //fetch(w3c 标准), axios（第三方库） ,xhr

        axios.get("/test.json").then(res => {
            console.log(res.data)
            this.setState({
                list:res.data.list
            })
        }).catch(err => {
            console.log(err)
        })
    }
}
