import React, { Component } from 'react'
import './css/index.css' // webpack => css-loader style-loader
export default class App extends Component {
    render() {
        let myname ="kerwin"
        // style改造对象写法
        let styleobj = {
            background:"red",
            fontSize: "30px"
        }
        return (
            <div>
                <div style={styleobj}>11111-{10 + 20}</div>
                <div style={{background:"yellow"}}>22222-{10 > 20 ? 'aaa' : 'bbb'}</div>
                <div className="mybox">{myname + 'myname'}</div>
            </div>
        )
    }
}
/*
    16之前 className,  不能class
    16之后 className class(警告)
*/

//all in js