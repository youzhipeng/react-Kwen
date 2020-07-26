import React, { Component } from 'react'

class Child extends Component{
    state = {
        mytext:"child-111111111111"
    }

    handleEvent(text){
        console.log("孩子组件中定义的",text)
        this.setState({
            mytext:text
        })
    }

    render(){
        return <div>
            child--{this.state.mytext}
        </div>
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick = {()=>{
                    console.log(this.refs.mychild.state.mytext)

                    this.refs.mychild.handleEvent("来自父组件的问候")
                }}>
                    click
                </button>
                {/* ref加到组件上，拿到的是组件对象 */}
                <Child ref="mychild"/>
            </div>
        )
    }
}
