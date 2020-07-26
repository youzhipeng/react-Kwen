import React, { Component } from 'react'
import MenuArr from '../../router/menu'
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router';
import {connect} from 'react-redux' 

const { Sider } = Layout; //解构
const { SubMenu } = Menu;

// console.log(MenuArr)

class SideMenu extends Component {
    state = {
        collapsed: false
    }
    //自己封装渲染函数
    renderMenu = (menus)=>{
       let {roleType} = JSON.parse(localStorage.getItem("token"))
       //roleType 当前登录用户的roleType
    //    console.log(roleType,'0000000000000000000000000')
       return menus.map(item=>{
           //提示：判断当前登录的用户的角色值（roleType），跟当前要渲染的侧边栏项需要的角色值进行对比
        //    console.log(item.permission,'11111111111111111111')
            if(item.children && roleType >= item.permission){
                return <SubMenu key={item.path} title={
                    <span>
                        <item.icon/>
                        <span>{item.title}</span>
                    </span>
                }>
                    {
                        //递归用法
                        this.renderMenu(item.children)
                    }
                </SubMenu>    
            }else{
                if( item.permission > roleType){
                    return null
                }
                return (
                    <Menu.Item key={item.path} icon={<item.icon />}>
                            {item.title}
                    </Menu.Item>
                )
            }
        })
    }

    handleChangePage = (obj)=>{
        // console.log(obj)
        // 高阶组件提供
        this.props.history.push(obj.key)//key路由对应的路径
    }

    componentDidMount() {
        //订阅方法，离开组件，一定要取消订阅
        // this.unscribe = store.subscribe(()=>{
        //     console.log("我是sideMenu中订阅者",store.getState())
        //     //store.getState() 获取最新状态

        //     this.setState({
        //         collapsed:store.getState().isCollapsed
        //     })
        // })
        // console.log(this.unscribe)

        //this.id=  setInterval(()=>{
        //     console.log("123")
        // },2000)
    }

    componentWillUnmount(){
        // //销毁
        // this.unscribe() //取消方法
        // //clearInterval(this.id)
    }
    
    
    render() {
        // console.log(this.props) //拿到此时路径
        let selectedKey = this.props.location.pathname
        let openKey = "/"+this.props.location.pathname.split("/")[1] //截取二级路由的一级路径
        return (
            <Sider trigger={null} collapsible collapsed={this.props.isCollapsed}>
                {/* <div className="logo" /> */}
                {
                    /*
                        defaultSelectedKeys ：高亮显示谁？
                        defaultOpenKeys：初始展开的 SubMenu 菜单项 key 数组	
                    */
                }
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]} defaultOpenKeys={[openKey]}
                    onClick ={this.handleChangePage}
                    //点击 MenuItem 调用此函数	
                >
                    {
                        this.renderMenu(MenuArr)
                    }
                    
                    {/* <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <SettingOutlined />
                                <span>用户管理</span>
                            </span>
                        }
                    >

                        <Menu.Item key="9">用户列表</Menu.Item>
                        
                    </SubMenu> */}

                </Menu>
            </Sider>
        )
    }
}
// connec拿到了store, store.getState()
const mapStateToProps = state => {

    // console.log(state)
    return {
        name:"kerwin",
        a:1,
        isCollapsed:state.isCollapsed
    } //函数返回值 ，就是将来往sideMeun 组件传来的属性
}// 映射redux 状态==>当前组件属性

export default connect(mapStateToProps)(withRouter(SideMenu))


/*
    function connect(callback){
        .....store
        var obj = callback(store.getState()) //{name:"kerwin",age:100}
        return function (Component){
            return <div>
                <Component {...obj}/>
            </div>
        }
    }

*/


// withRouter 高阶组件


// connect 高阶组件， connect(配置信息)(当前组件)

/*
    1. activeClassName 设置完无效,高亮无效
        npm & cnpm
    2. Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack
        改成 history模式 BrowserRouter

    3. 实证法

       输出倒逼输入
 */