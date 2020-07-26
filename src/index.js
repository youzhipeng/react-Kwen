import React from 'react'; // import Vue  react核心包
import ReactDOM from 'react-dom'; // react-dom 封装dom操作 
import './index.css';
// import App from './02-advanced/09-slot-swiper';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' //antd样式文件

import App from './App'

// import * as serviceWorker from './serviceWorker'; //html5 缓存

ReactDOM.render(
  // <React.StrictMode>
    <App></App>, //App自定义得组件
  // </React.StrictMode>,
  document.getElementById('root')
);
//new Vue({el:"#root"})

//jsx === js + xml（闭合标签）
// ReactDOM.render(<div>hello react</div>,document.getElementById("root"))
// <div>hello react</div> ===>(babel-loader) React.createElement("div","hello react")

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
