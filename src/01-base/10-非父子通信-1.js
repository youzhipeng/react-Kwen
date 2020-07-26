import React, { Component } from 'react'

//侧边栏定义
class Sidebar extends Component{
    render(){
        return <aside style={{width:'200px',height:'480px',border:"1px solid red"}}>
            侧边栏组件
        </aside>
    }
}

class Header extends Component{
    render(){
        return <div style={{height:"100px",border:"1px solid #14c145"}}>
            <button onClick={()=>{
                this.props.onContentEvent();
            }}>切换</button>
        </div>
    }
}

class Content extends Component{
    render(){
        return <div style={{width:'300px',height:'480px',border:"1px solid blue"}}>
            内容区组件
            <Header  onContentEvent={()=>{
                console.log("content定义的")
                this.props.onAppEvent()
            }}/>
        </div>
    }
}


export default class App extends Component {
    state = {
        isCreated:true
    }

    render() {
        return (
            <div style={{width:'510px',height:'500px',border:'1px solid black',display:'flex'}}>
                {
                    this.state.isCreated?
                    <Sidebar/>
                    :null
                }
                <Content onAppEvent={()=>{
                    console.log("app组件定义的")
                    this.setState({
                        isCreated:!this.state.isCreated
                    })
                }}></Content>
            </div>
        )
    }
}
