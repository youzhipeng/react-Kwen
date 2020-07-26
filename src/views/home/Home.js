import React, { Component } from 'react'
import echarts from 'echarts'
import Axios from 'axios'
import _ from 'lodash' //不需下载
export default class Home extends Component {

    state = {

    }

    group = []

    componentDidMount() {
        // console.log(this.refs.myechart.clientWidth)
        // 所有dom创建完后，此生命周期执行，样式也会执行完？？ 

        Axios.get("http://localhost:5000/articles").then(res=>{
            // console.log(res.data)
            //后端给的数据不是前端想要的数据，数据转换
            console.log(_.groupBy(res.data,"author"))
            // console.log(_.groupBy(res.data,item=>item.category[0]))
            // lodash 


            this.group = _.groupBy(res.data,"author")

            //ES5
            // console.log(Object.keys(this.group))
            // console.log(Object.values(this.group).map(item=>item.length))
        
            this.initEChart()
        
        })


        setTimeout(() => {
            // console.log(this.refs.myechart.clientWidth)

        }, 0)

        window.onresize = ()=>{
            // console.log("123")
            this.myChart.resize();
            // echart创建的对象.resize()
        }
    }

    initEChart = ()=>{
        this.myChart = echarts.init(this.refs.myechart);
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '统计用户发布文章数'
            },
            tooltip: {},
            legend: {
                data: ['文章数']
            },
            xAxis: {
                data: Object.keys(this.group)
            },
            yAxis: {
                minInterval: 1
            },
            series: [{
                name: '文章数',
                type: 'bar',
                data: Object.values(this.group).map(item=>item.length)
            }]
        };
        this.myChart.setOption(option)
    }

    componentWillUnmount(){
        window.onresize = null; //解绑事件
    }

    render() {
        return (
            <div ref="myechart" style={{ width: "100%", height: "400px" }}>
                home
            </div>
        )
    }
}
