import React, { Component } from 'react'

export default class App extends Component {
    // data(){
    //     return {
    //         myname:"kerwin"
    //     }
    // }

    // constructor() {
    //     super()
    //     // react定义状态的方式
    //     this.state = {
    //         myname: "kerwin",
    //         myage: 100
    //     }
    //     this.a=100
    // }
    a= 100 //不是状态，
    state = {
        myname: "kerwin",
        myage: 100
    }//状态

    render() {
        return (
            <div>
                <div>hello -- {this.state.myname}--{this.state.myage}</div>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }

    handleClick = () => {
        // this.state.myname = "xiaoming"  //不能直接修改
        this.setState({
            myname: "tiechui",
            myage:18
        })//用setState 间接修改
        // 虚拟dom创建 ==>对比老的虚拟节点 =>patch=>更新真实dom.
    }
}


/*
    class Test{
        constructor(){
            this.a= {
                myname:"111"
            }
            //this.b= 2
        }

        b = 2

        geta(){
            console.log(this.a.myname)
        }

        getb(){

        }
    }

*/