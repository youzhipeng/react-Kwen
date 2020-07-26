import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [],
        isCreated:true
    }

    render() {
        let a1 = <div>111111</div>
        let a2 = <div>222222</div>
        return (
            <div>
                <div>
                    <button onClick={()=>{
                        this.setState({
                            isCreated: !this.state.isCreated
                        })
                    }}>切换</button>
                    {
                        this.state.isCreated?a1:a2
                    }
                </div>
                <input ref="mytext" />
                <button onClick={this.handleClick}>add</button>
                {/* 如何遍历呢？map */}


                {
                    this.state.list.length ?
                    <ul>
                        {
                            this.state.list.map((item, index) =>
                                <li key={item}>
                                    {item}--{index}
                                    <button onClick={() => this.handleDelClick1(index)
                                    }>del1</button>
                                    <button onClick={this.handleDelClick2.bind(this,index)}>del2</button>
                                </li>
                            )
                        }
                    </ul>
                    :
                    <div>没有待办事项</div>    
                }
            </div>
        )
    }

    handleDelClick1 = (index) => {
        console.log("del1", index)

        // this.state.list.splice() //不能直接修改原状态
        // let newlist = this.state.list //引用赋值不行

        let newlist = [...this.state.list] 
        // let newlist = this.state.list.concat()
        newlist.splice(index,1)
        this.setState({
            list:newlist
        })
    }

    handleDelClick2(index){
        console.log("del2",index)
    }

    handleClick = () => {
        // console.log(this.refs.mytext.value)
        // this.state.list.push(this.refs.mytext.value) //不能直接修改原状态

        this.setState({
            list: [...this.state.list, this.refs.mytext.value]
        })
    }
}

//原生map

var list = ["1111", "222", "3333"]

// var oli = document.createElement("li")
// oli.innerHTML = list[0]
var newlist = list.map(item => `<li class="item">${item}</li>`)

console.log(newlist)
