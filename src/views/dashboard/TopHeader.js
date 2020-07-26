import React, { Component } from 'react'
import { withRouter } from 'react-router' //react-router-dom时候，自动下载react-router
import { Layout, Avatar, Dropdown, Menu } from 'antd';//导入某几个接口
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {connect} from 'react-redux'
const { Header } = Layout; //解构

class TopHeader extends Component {
    state = {
        collapsed: false,

    };

    toggle = () => {
        //发布者
        // store.dispatch({
        //     type:"kerwin_change_collapse",
        //     payload:!this.state.collapsed
        // })//传的对象 就是action     

        this.props.change({
            type:"kerwin_change_collapse",
            payload:!this.state.collapsed
        });//回调父组件传来的方法

        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handleMenu = (obj) => {
        // console.log(obj)
        if (obj.key === 'exit') {
            // 清除token, 切换页面
            localStorage.removeItem("token")
            this.props.history.push('/login')
        }
    }

    render() {
        const currentUser = JSON.parse(localStorage.getItem("token"))
        const menu = (
            <Menu onClick={this.handleMenu}>
                <Menu.Item key="role">
                    {currentUser.roleName}
                </Menu.Item>
                <Menu.Item key="exit">
                    退出
              </Menu.Item>
            </Menu>
        );
        // console.log(currentUser)

        return (
            <Header className="site-layout-background" style={{
                padding: '0 24px'
            }}>
                {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
                })} */}
                {
                    this.state.collapsed ?
                        <MenuUnfoldOutlined onClick={this.toggle} />
                        :
                        <MenuFoldOutlined onClick={this.toggle} />
                }
                <div style={{ float: 'right' }}>
                    <span>欢迎{currentUser.username}回来</span>
                    {/* 下拉菜单 */}
                    <Dropdown overlay={menu}>
                        <Avatar icon={<UserOutlined />} size="large" />
                    </Dropdown>
                </div>
            </Header>
        )
    }

    exit = () => {
        localStorage.removeItem("token")

        // console.log(this.props.history)
        this.props.history.push('/login')
    }
}
//mapStateToProps

const  mapStateToProps = ()=>{
    return {
        a:1
    }
}
//给TopHeader 传哪些回调函数
const mapDispatchToProps = {
    change(obj){
        console.log("change-connect约定好，传给topheader的回调",obj)
        return obj
    },
    aaa(){

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TopHeader))
// 找个gandie
/*
    withRouter 函数  ,接受一个组件作为参数， 返回一个父组件包着我们传入的组件

    withRouter 高阶组件， 获取低阶组件， 生成高阶组件

    function withRouter(Component){
        .....
        return <div>
            111111
            <Component history={} location/>
        </div>
        ....
    }
*/