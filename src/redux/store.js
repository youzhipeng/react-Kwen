/*
    const store = new Vuex.Store({
        state:{
            isCollapsed:false
        },
        mutations:{
            //唯一修改状态的位置
            change(data){
                this.isCollapsed = data //必须影响老状态
            }
        },
        actions:{
            //异步
        }
    })

    {{this.$store.state.isCollapsed}}

    this.$store.dispatch(“change”)

*/

import {createStore, applyMiddleware,compose,combineReducers} from 'redux'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import collapseReducer from './reducers/collapseReducer'
import roleListReducer from './reducers/roleListReducer'
//普通函数=> (接收参数==>返回新状态)
//prevState 老状态


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
    reducer 拆成几个子reducer
    combineReducer(合并子reducer为一个大的reducer)
*/

const reducer = combineReducers({
    isCollapsed:collapseReducer,
    roleList:roleListReducer
})
const store =createStore(reducer,{
    isCollapsed :false, //初始状态
    roleList:[],
    // rightList:[]
},composeEnhancers(applyMiddleware(reduxPromise,reduxThunk)))//第二参数， 可以设置中间件 || 初始状态
//应用中间件， promise,让redux dispatch 方法支持promise对象
export default store

/*
    reducer 必须是纯函数设计

        1. 对外界没有副作用的函数
        2. 同样的输入得到同样的输出
    */
    // var myname = "111111"
    // function test(){
    //     myname = "22222"
    
    // }
    // test( ) //不纯

    // var myname = "11111"

    // function test(a){
    //     a = "222222"
    // }
    // test(myname) //纯

    // var obj={
    //     name:"kerwin",
    //     age:100
    // }

    // function test(prevState){
    //     prevState.name="xiaoming"
    // }
    // test(obj) //不纯

    // var obj={
    //     name:"kerwin",
    //     age:100
    // }

    // function test(prevState){
    //     var newstate = {...prevState}
    //     newstate.name="xiaoming"
    //     return newstate
    // }
    // test(obj) //纯

    // var obj={
    //     name:"kerwin",
    //     age:100
    // }

    // function test(prevState){
    //     var newstate = {...prevState}
    //     newstate.name="xiaoming"+Math.random()
    //     return newstate
    // }
    // test(obj) //不纯

// store.dispatch({
//  好多的action ,type
//}) 发布者发布的这个对象，就是reducer中的payload值

// strore.subscribe(()=>{}) //订阅者更新
