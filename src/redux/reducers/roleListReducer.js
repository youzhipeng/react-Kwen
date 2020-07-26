//只管理 roleList 是 []

const roleListReducer  = (prevState=[],action)=>{
    // console.log(action)
    //payload自动传来要修改成什么值？
    // prevState.isCollapsed = payload

    //深复制prevState,返回修改后的新状态

    let {type,payload} = action
    switch (type) {
        case "kerwin_save_rolelist":
            //处理 roleList
            // console.log(payload)
            let newState = [...prevState,...payload]
            return newState
        default:
            return prevState //没有匹配到， 返回老状态
    }
}

export default roleListReducer