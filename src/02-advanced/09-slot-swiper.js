import React, { Component } from 'react'
import Swiper from 'swiper' // new Swiper()
import 'swiper/css/swiper.css'

class KerwinSwiper extends Component{
    render(){ 
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                {this.props.children}
            </div>
        </div>
    }

    componentDidMount() {
        new Swiper(".swiper-container",{
            loop: true
        })
    }
    
}



export default class App extends Component {
    state = {
        list: ["aaaaa","bbbbb","cccc"]
    }
    render() {
        return (
            <div>
                <KerwinSwiper>
                    {
                        this.state.list.map(item=>
                            <div className="swiper-slide" key={item}>
                                {item}
                            </div>    
                        )
                    }
                </KerwinSwiper>
            </div>
        )
    }
}
