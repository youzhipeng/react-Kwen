import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>
            child
        </div>
    }

    componentDidMount() {
        console.log("componentDidMount","setInterval;window.onscroll")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount","clearInterval,window.onscroll=null")
    }
    
}

export default class App extends Component {
    state = {
        isCreated:true
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isCreated:false
                    })
                }}>销毁切换</button>
                {
                    this.state.isCreated?
                    <Child/>
                    :null
                }                
            </div>
        )
    }
}
