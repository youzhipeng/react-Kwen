import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: "aaaa"
    }
    render() {
        return (
            <div>
                app -{this.state.text}
            </div>
        )
    }

    // componentWillMount() {
    //     console.log("componentWillMount")
    //     this.setState({text:"222222"})
    // }

    static getDerivedStateFromProps(nextProps,nextState) {
        console.log(nextState)
        return {
            text:"kerwin"+nextState.text
        }
    }

}
