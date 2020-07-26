import React, { Component } from 'react'

class List extends Component{
    render(){
        console.log(this.props.mylist)
        let mylist = this.props.mylist
        return <ul>
            {
                mylist.map((item,index)=>
                    <li key={item}>
                        {item}
                        <button onClick={()=>this.handleDelClick(index)}>del</button>
                    </li>    
                )
            }
        </ul>
    }

    handleDelClick= (index) => {
        // 修改mylist属性? 属性不允许修改。
        console.log("del",index)
        // 通知父组件，删除list状态第几个元素，
        // 子==>父 回调函数
        this.props.onKerwinEvent(index) //回调函数

    }
}
class Other extends Component{
    render(){
        return <div>
            没有待办事项
        </div>
    }
}



export default class App extends Component {
    state = {
        list: []
    }

    render() {
      
        return (
            <div>
               
                <input ref="mytext" />
                <button onClick={this.handleClick}>add</button>
                {/* 如何遍历呢？map */}


                {
                    this.state.list.length ?
                    <List mylist={this.state.list} onKerwinEvent={(index)=>{
                        console.log("父组件中定义的一个回调函数，当成属性传给孩子",index)

                        this.handleDelClick1(index)
                    }} />
                    :
                    <Other/>   
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

