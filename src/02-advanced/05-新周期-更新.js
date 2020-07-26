import React, { Component } from 'react'


class Child extends Component {

    state = {
        list: [
            { categoryId: 1, title: "衣服1" ,id:1 },
            { categoryId: 1, title: "衣服2" ,id:2},
            { categoryId: 1, title: "衣服3" ,id:3},
            { categoryId: 2, title: "裤子1" ,id:4},
            { categoryId: 2, title: "裤子2" ,id:5},
            { categoryId: 3, title: "鞋1" ,id:6},
            { categoryId: 3, title: "鞋1" ,id:7},
            { categoryId: 3, title: "鞋3" ,id:8}
        ],
        shoplist: []
    }

    render() {
        return <div>
            传来的属性-{this.props.id}
            {
                this.state.shoplist.map(item=>
                <li key={item.id}>{item.title}</li>    
                )
            }
        </div>
    }
    componentDidMount() {
        //id=1 筛选
        console.log("child-componentDidMount")

        // this.setState({
        //     shoplist: this.state.list.filter(item=>item.categoryId === this.props.id)
        // })
    }

    // componentWillReceiveProps(nextProps) {
    //     //根据属性 要请求后端数据，根据属性要筛选数据
    //     // 根据父组件传来的属性进行逻辑运算的时候，就在这个生命周期
    //     this.setState({
    //         shoplist: this.state.list.filter(item=>item.categoryId === nextProps.id)
    //     })
    // }

    static getDerivedStateFromProps(nextProps,nextState) {
        console.log(nextProps)
        return {
            shoplist: nextState.list.filter(item=>item.categoryId === nextProps.id)
        }
    }

}

export default class App extends Component {
    state = {
        list: [
            { id: 1, title: "衣服" },
            { id: 2, title: "裤子" },
            { id: 3, title: "鞋" }
        ],
        id: 1
    }
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item.id} onClick={() => {
                                    this.setState({
                                        id: item.id
                                    })
                                }}>{item.title}</li>
                            )
                        }
                    </ul>
                </nav>
                <Child id={this.state.id} />
            </div>
        )
    }

    componentDidMount() {
        console.log("app-componentDidMount")
    }
}
