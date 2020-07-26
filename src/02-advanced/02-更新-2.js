import React, { Component } from 'react'


class Child extends Component {

    render() {
        return <div>
            hello child-{this.props.text}
        </div>
    }
    componentDidMount() {
        console.log("child-componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
        //根据属性 要请求后端数据，根据属性要筛选数据
        // 根据父组件传来的属性进行逻辑运算的时候，就在这个生命周期

        console.log("老的属性",this.props)
        console.log("新的属性",nextProps)
        console.log("componentWillReceiveProps",nextProps)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

}

export default class App extends Component {
    state = {
        mytext: 1
    }
    render() {
        return (
            <div>
                <div>App-{this.state.mytext}<button onClick={()=>{
                    this.setState({
                        mytext:2
                    })
                }}>click</button></div>
                <Child text={this.state.mytext}/>
            </div>
        )
    }

    componentDidMount() {
        console.log("app-componentDidMount")
    }
}
