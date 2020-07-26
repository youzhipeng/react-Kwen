//只管理 isCollapsed 是 true还是false

const collapseReducer  = (prevState=false,action)=>{
    // console.log(action)
    //payload自动传来要修改成什么值？
    // prevState.isCollapsed = payload

    //深复制prevState,返回修改后的新状态

    let {type,payload} = action
    switch (type) {
        case "kerwin_change_collapse":
            //处理折叠
            let newState = payload
            return newState
        default:
            return prevState //没有匹配到， 返回老状态
    }
}
export default collapseReducer