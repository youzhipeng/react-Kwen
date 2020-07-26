import React,{Component} from 'react'
//1-函数式组件

function Child (){
    return <div>child</div>
}

// function App () {
//     return (
//         <div>
//             <p>111111</p>
//             <p>222222</p>
//             <p>333333</p>
//             <Child/>
//         </div>
//     )
// }

// 2- class 类组件
class App extends React.Component{
    //后面要讲得生命周期之一？
    render(){
        // console.log("render")  

        return ( 
            <div>
                {/* <p>11111</p> */}
                <Child/>
                <Child2/>
            </div>
        )
    }
}

class Child2 extends Component{
    render(){
        return <div>child2</div>
    }
}
/*
    1. 不支持类写法， 函数式写法， React.creatClass
    2. es6普及, class（状态，属性，生命周期） ，函数式（不支持状态、生命周期，支持属性），
    3. 16.3 ==> class 生命周期写法升级

    4. 16.8 之后， 函数式组件=>支持状态，“生命周期"， React Hooks ( Vue3.0 支持)
*/

export default App

// codereview 代码评审 