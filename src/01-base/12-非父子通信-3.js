import React, { Component } from 'react'
// context通信 ,跨级通信方式
const GlobalContext = React.createContext()

//侧边栏定义
class Sidebar extends Component {
    render() {
        return <GlobalContext.Consumer>
            {
                context => (
                    <aside style={{ width: '200px', height: '480px', border: "1px solid red" }}>
                        侧边栏组件-{context.call}
                    </aside>
                )
            }
        </GlobalContext.Consumer>
    }
}

class Header extends Component {
    render() {
        return <GlobalContext.Consumer>
            {
                context => (
                    <div style={{ height: "100px", border: "1px solid #14c145" }}>
                        <button onClick={() => {
                            //发布
                            // context.call="11111111111"
                            context.changeCall("111111")
                            context.changeCreated()
                        }}>切换</button>
                        {context.sms}
                    </div>
                )
            }
        </GlobalContext.Consumer>
    }
}

class Content extends Component {
    render() {
        return <div style={{ width: '300px', height: '480px', border: "1px solid blue" }}>
            内容区组件
            <Header />
        </div>
    }
}


export default class App extends Component {
    state = {
        isCreated: true,
        service:"打电话-付费"
    }

    render() {
        //多次被执行
        return (
            <GlobalContext.Provider value={
                {
                    call: this.state.service,
                    sms: "短信服务",

                    changeCall:(data)=>{
                        console.log("改变套餐")
                        this.setState({
                            service:"打电话-免费"+data
                        })
                    },

                    changeCreated:()=>{
                        this.setState({
                            isCreated:!this.state.isCreated
                        })
                    }
                }
            }>
                <div style={{ width: '510px', height: '500px', border: '1px solid black', display: 'flex' }}>
                    {
                        this.state.isCreated ?
                            <Sidebar />
                            : null
                    }
                    <Content></Content>
                </div>
            </GlobalContext.Provider>
        )
    }
}
