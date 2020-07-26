import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../home/Home'
import Users from '../usermanage/Users'
import NotFound from '../error/Error'
import Manage from '../right-manage/index'
import SideMenu from './SideMenu'
import List from '../article-manage/List'
import Preview from '../article-manage/Preview'
import TopHeader from './TopHeader'
import './index.css'

import { Layout } from 'antd';
import Create from '../article-manage/Create'
import Update from '../article-manage/Update'
const { Content } = Layout; //解构



export default class DashBoard extends Component {


    render() {
        let { roleType } = JSON.parse(localStorage.getItem("token"))
        return (
            <Layout>
                {/* 自定义的sidemenu */}
                <SideMenu></SideMenu>
                <Layout className="site-layout">
                    <TopHeader></TopHeader>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 'auto',
                        }}
                    >
                        <Switch>
                            {/* home路由 */}
                            <Route path="/home" component={Home} />
                            {/* 用户权限-用户列表 */}
                            {roleType >= 3 ?
                                <Route path="/user-manage/users" component={Users} />
                                :
                                null
                            }

                            {/* 权限管理-权限列表,角色列表 */}
                            {
                                roleType >= 3 ?
                                    <Route path="/right-manage" component={Manage} />
                                    : null
                            }

                            {/* 文章管理- 文章列表 文章分类 */}
                            <Route path="/article-manage/list" component={List} />
                            <Route path="/article-manage/preview/:myid" component={Preview} exact />
                            <Route path="/article-manage/create" component={Create}/>
                            <Route path="/article-manage/update/:id" component={Update}/>
                            <Redirect from="/" to="/home" exact />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
/*
    1. 状态提升
    2. 订阅发布
    3. context

    4. redux ==>（后面去讲）
*/

/*
    Route 组件 接受了component属性后， 会把属性值对于的组件做成自己的孩子

    class Route extend Component{
        render(){
            //this.props.compoennt
            var MyCompoennt = this.props.componet
            return <div>
                <MyCompoennt history={} location={} />
            </div>
        }
    }

*/
