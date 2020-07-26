import React from 'react';
import BlogRouter from './router'
import { Provider } from 'react-redux';
import store from './redux/store';
//根组件
class App extends React.Component{
  render(){
    return <Provider store={store}>
        {/* context 上下文 消费者生产者模式 */}
        <BlogRouter/>
    </Provider>
  }
}

/*
  new Vue({
    render:h=>h(App)
    router,
    store
  }).$mount("#app")

*/

export default App;
