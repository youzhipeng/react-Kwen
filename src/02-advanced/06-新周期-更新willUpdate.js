import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text:"1111"
    }
    render() {
        console.log("render")
        return (
            <div>
                hello-{this.state.text}

                <button onClick={()=>{
                    this.setState({
                        text:'22222'
                    })
                }}>click</button>
            </div>
        )
    }

    // UNSAFE_componentWillUpdate(){
    //     console.log("componentWillUpdate")
    // }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return 100 //老的scrollHeight
    }

    componentDidUpdate(prevProps, prevState,oldHeight) {

        console.log("componentDidUpdate",oldHeight)
        //scrollTOP+= 新的scorllHeight- oldHeight
    }
    
}
