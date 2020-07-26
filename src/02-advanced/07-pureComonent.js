import React, { Component, PureComponent } from 'react'

export default class App extends PureComponent {
    state = {
        myname: "11111"
    }
    render() {
        console.log("render")
        return (
            <div>
                {
                    this.state.myname
                }
                <button onClick={() => {
                    this.setState({
                        myname: "2222"
                    })// 虚拟dom => diff对比 => 没有变化，不用更新dom
                }}>click</button>

                {/* <Child1/>
                <Child2/>
                <Child3/>
                <Child4/> */}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps","父子组件中子组件才会触发")
    }
    

    // 组件应该更新吗？ 应该true, 不应该返回false
    // 性能优化生命周期
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("shouldComponentUpdate")
    //     console.log("老的状态",this.state)
    //     console.log("新的状态",nextState)
    //     // return true
    //     if(JSON.stringify(this.state)===JSON.stringify(nextState)){
    //         return false
    //     }
    //     return  true
    // }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate","dom更新完了")
    }
}
/*
    vue 状态前后没有变化，
    this.a = 1  
    vue不会重复走更新生命周期的。

    React 会
*/