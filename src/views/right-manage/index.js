import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Roles from './Roles'
import Rights from './Rights'

export default class Manage extends Component {
    render() {
        return (
            <div>
                <div>公共的选项卡</div>
                <Switch>
                    <Route path="/right-manage/roles" component= {Roles}/>
                    <Route path="/right-manage/rights" component= {Rights}/>
                    <Redirect from="/right-manage" to="/right-manage/roles"/>
                </Switch>           
            </div>
        )
    }
}
