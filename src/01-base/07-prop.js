import React, { Component } from 'react'
import myPropTypes from 'prop-types' // 包含数据类型验证方法
// console.log(myPropTypes)
// props 用在父子通信， 让组件的复用性大大提高了
// state 自己内部

// 铁锤封装的NavBar 组件
// 属性验证 ：验证每一个属性类型
// 默认属性 ：不传属性时候的默认值。
class Navbar extends Component {
    // props:["mytext"] vue写法
    /*
       vue 属性验证
       props: {
           myshow:Boolean,
           mytext:String
       } 
    */
    // react this.props.mytext

    // 关键字 属性验证
    static propTypes = {
        mytext:myPropTypes.string,
        myshow:myPropTypes.bool
    }

    // 默认属性
    static defaultProps = {
        myshow:true
    }


    render() {
        return <div>
            {
                this.props.myshow?
                <button>返回</button>
                :null
            }
            <span>{this.props.mytext}--导航栏</span>
            {
                this.props.myshow?
                <button>主页</button>
                :null
            }
        </div>
    }
}

export default class App extends Component {
    render() {

        let obj = {
            mytext:"home",
            myshow:false
        }

        return (
            <div>
                <div style={{ background: "yellow" }}>
                    home页面中使用navabar组件
                    <Navbar {...obj}/>
                </div>
                <div style={{ background: "blue" }}>
                    list页面中使用
                    <Navbar mytext="list" />
                </div>
                <div style={{ background: "red" }}>
                    center页面中使用
                    <Navbar mytext="center"/>
                </div>
            </div>
        )
    }
}
