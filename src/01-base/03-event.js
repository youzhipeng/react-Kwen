import React, { Component } from 'react'

export default class App extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <p>用户名：<input type="text" ref="mytext"/></p>
                <p>密码：<input type="password" ref="mypassword"/></p>
                <button onClick={() => {
                    console.log("匿名箭头函数",this.refs.mytext.value)
                }}>ok1</button>

                <button onClick={this.handleKerwinClick2.bind(this)}>ok2</button>

                <button onClick={this.handleKerwinClick3}>ok3</button>
            </div>
        )
    }

    handleKerwinClick2(){
        console.log("外部自定义函数2",this.refs.mytext.value) //undefined
    }

    handleKerwinClick3 = ()=>{
        console.log("外部自定义函数3",this.refs.mytext.value) 
    }

}


/*
    ES6 类

    class Test{
        constructor(){

        }
        a(){
            this.b()
        }
        b(){

        }
    }
    var obj = new Test()
    obj.a()
    obj.b()


    var obtn = document.getElementById("mybtn")
    obtn.onclick = function(){
        console.log(this)
    }


    // call apply bind
*/

var obj1={
    name:"obj1",
    getName(){
        console.log(this.name)
    }
}
var obj2={
    name:"obj2",
    getName(){
        console.log(this.name)
    }
}
obj1.getName()
obj1.getName.call(obj2,1,2,3) //改变this指向， 自动执行函数,n个参数
obj1.getName.apply(obj2,[1,2,3]) //改变this指向， 自动执行函数，第二个参数必须是一个数组

obj1.getName.bind(obj2)() //改变this指向， 不会自动执行函数