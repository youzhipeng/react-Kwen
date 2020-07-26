import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>
            child
            {/* 插槽 */}

            {/* <slot></slot> */}
            {/* v-slot */}
            {/* 具名插槽 */}

            {this.props.children[1]}
            {this.props.children[0]}
            {this.props.children[2]}
        </div>
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                hello
                <Child a="1" b="2">
                    <div>11111111</div>
                    <div>22222222</div>
                    <div>33333333</div>
                </Child>
            </div>
        )
    }
}
