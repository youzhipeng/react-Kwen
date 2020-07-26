// 路由配置文件
// 利用react-router-dom模块,封装路由组件,将来再根组件App中引用

import React, { Component } from 'react'
import {
    HashRouter,  // 构建 hash 路由, #/home #/login  === ( Vue mode:hash )
    // BrowserRouter,// 构建 history 路由  /home /login === ( Vue mode:history )
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
//-------blog 自定义组件-------------------------
import Login from '../views/login/Login'
import DashBoard from '../views/dashboard/DashBoard'

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
              <Switch>
                {/* <Route path="/" component={DashBoard} exact/> */}
                <Route path="/login" component={Login}/>

                {/* 路由拦截--三目 */}
                <Route path="/" render={()=>
                    localStorage.getItem("token")?<DashBoard/>:<Redirect to="/login"/>
                } />

              </Switch>  

                {/* <Redirect from="/" to="/login"/> */}
                {/* <Route path="/a" component={A}/> */}
            </HashRouter>
                )
            }
        }
        
/*
    模糊匹配
    /

    /home

    /home/a

   (1) 精确匹配 exact
   (2) 保留模糊匹配 ,<Switch></Switch> 只会渲染匹配到的第一个项

    <HashRouter>
        <Route path="/home" render={
            ?重定向
        }/>
        <Route path="/login" component={Login}/>
        <Route path="/user-manage/users" render={
            ?重定向
        }/>    
    <HashROuter>

*/