import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext:'1111111',
        count : 1
    }
    render() {
        return (
            <div>
                helllo-{this.state.mytext}
                <button onClick={this.handleClick1}>click1</button>

                <button onClick={this.handleClick2}>click2</button>

                <div>
                    计数器-{this.state.count}

                    <button onClick={this.handleAdd}>add</button>
                </div>
            </div>
        )
    }

    handleAdd = ()=>{
        this.setState({
            count:this.state.count +1 
        })

        this.setState({
            count:this.state.count +1 
        })

        this.setState({
            count:this.state.count +10
        })

        //合并一个操作，只做一次虚拟dom 创建，只做一次diff对比
    }

    handleClick1 = ()=>{
        // setState 状态更新 是同步还是异步？？？
        this.setState({
            mytext:"22222222"
        },()=>{
            console.log("该回调函数，会等待状态更新完， 并且dom更新完，才会被调用",this.state.mytext)
        }) // 异步，创建虚拟dom，diff算法对比老的虚拟dom节点，patch ,最小代价更新真实dom
        console.log(this.state.mytext) 

    }

    handleClick2 = ()=>{
        //同步
        setTimeout(()=>{
            // 同步
            this.setState({
                mytext:"333333333"
            })
            console.log(this.state.mytext)
        },0)
    }
}
// setState 并不保证是同步的
// batchUpdate 批处理