import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { Form, Input, Button, message } from 'antd';
import { QqOutlined, LockOutlined } from '@ant-design/icons';//icon-font
import style from './login.module.css'
import axios from 'axios'

export default class Login extends Component {
    render() {
        return (
            <div style={{ background: 'rgb(35,39,65)' }}>
                <Particles height={window.innerHeight - 5} params={{
                    "absorbers": [],
                    "background": {},
                    "backgroundMask": {
                        "cover": {
                            "color": {
                                "value": "#fff"
                            },
                            "opacity": 1
                        },
                        "enable": false
                    },
                    "detectRetina": true,
                    "emitters": [],
                    "fpsLimit": 60,
                    "interactivity": {
                        "detectsOn": "canvas",
                        "events": {
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "onDiv": {
                                "elementId": "",
                                "enable": false,
                                "mode": []
                            },
                            "onHover": {
                                "enable": true,
                                "mode": "bubble",
                                "parallax": {
                                    "enable": false,
                                    "force": 60,
                                    "smooth": 10
                                }
                            },
                            "resize": true
                        },
                        "modes": {
                            "absorbers": [],
                            "bubble": {
                                "distance": 400,
                                "duration": 2,
                                "opacity": 1,
                                "size": 40
                            },
                            "connect": {
                                "distance": 80,
                                "lineLinked": {
                                    "opacity": 0.5
                                },
                                "radius": 60
                            },
                            "emitters": [],
                            "grab": {
                                "distance": 400,
                                "lineLinked": {
                                    "opacity": 1
                                }
                            },
                            "push": {
                                "quantity": 4
                            },
                            "remove": {
                                "quantity": 2
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4,
                                "speed": 1
                            },
                            "slow": {
                                "factor": 3,
                                "radius": 200
                            }
                        }
                    },
                    "particles": {
                        "collisions": {
                            "enable": false,
                            "mode": "bounce"
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "lineLinked": {
                            "blink": false,
                            "color": {
                                "value": "#323031"
                            },
                            "consent": false,
                            "distance": 150,
                            "enable": false,
                            "opacity": 0.4,
                            "shadow": {
                                "blur": 5,
                                "color": {
                                    "value": "lime"
                                },
                                "enable": false
                            },
                            "width": 1
                        },
                        "move": {
                            "attract": {
                                "enable": false,
                                "rotate": {
                                    "x": 600,
                                    "y": 1200
                                }
                            },
                            "direction": "none",
                            "enable": true,
                            "outMode": "bounce",
                            "random": false,
                            "speed": 6,
                            "straight": false,
                            "trail": {
                                "enable": false,
                                "length": 10,
                                "fillColor": {
                                    "value": "#000000"
                                }
                            }
                        },
                        "number": {
                            "density": {
                                "enable": true,
                                "area": 800
                            },
                            "limit": 0,
                            "value": 170
                        },
                        "opacity": {
                            "animation": {
                                "enable": false,
                                "minimumValue": 0.1,
                                "speed": 1,
                                "sync": false
                            },
                            "random": {
                                "enable": false,
                                "minimumValue": 1
                            },
                            "value": 1
                        },
                        "rotate": {
                            "animation": {
                                "enable": false,
                                "speed": 0,
                                "sync": false
                            },
                            "direction": "clockwise",
                            "random": false,
                            "value": 0
                        },
                        "shadow": {
                            "blur": 0,
                            "color": {
                                "value": "#000000"
                            },
                            "enable": false,
                            "offset": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        "shape": {
                            "options": {
                                "character": {
                                    "fill": false,
                                    "close": true,
                                    "font": "Verdana",
                                    "style": "",
                                    "value": "*",
                                    "weight": "400"
                                },
                                "char": {
                                    "fill": false,
                                    "close": true,
                                    "font": "Verdana",
                                    "style": "",
                                    "value": "*",
                                    "weight": "400"
                                },
                                "polygon": {
                                    "fill": true,
                                    "close": true,
                                    "sides": 5
                                },
                                "star": {
                                    "fill": true,
                                    "close": true,
                                    "sides": 5
                                }
                            },
                            "image": {
                                "fill": true,
                                "close": true,
                                "height": 32,
                                "replaceColor": true,
                                "src": "/logo192.png",
                                "width": 32
                            },
                            "type": "image"
                        },
                        "size": {
                            "animation": {
                                "enable": false,
                                "minimumValue": 0.1,
                                "speed": 40,
                                "sync": false
                            },
                            "random": {
                                "enable": false,
                                "minimumValue": 1
                            },
                            "value": 16
                        },
                        "stroke": {
                            "color": {
                                "value": "#000000"
                            },
                            "width": 0,
                            "opacity": 1
                        },
                        "twinkle": {
                            "lines": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            },
                            "particles": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            }
                        }
                    },
                    "pauseOnBlur": true,
                    "polygon": {
                        "draw": {
                            "enable": false,
                            "stroke": {
                                "color": {
                                    "value": "#ffffff"
                                },
                                "width": 0.5,
                                "opacity": 1
                            }
                        },
                        "enable": false,
                        "inline": {
                            "arrangement": "one-per-point"
                        },
                        "move": {
                            "radius": 10,
                            "type": "path"
                        },
                        "scale": 1,
                        "type": "none",
                        "url": ""
                    }
                }
                }></Particles>          <div className={style.container}>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ username:"admin" }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<QqOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        {/* <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item> */}

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        )
    }

    onFinish = values => {
        console.log('提交后端校验', values);

        // 后端提供用户名密码验证接口，登录验证成功后，才能，跳转页面
        // 如果失败，弹出提示，用户名密码不匹配

        // 真实的接口
        // axios.post("http://localhost:5000/usersvalidate",{username:"",password:"",roleState:true})

        // mock 
        axios.get(`http://localhost:5000/users?username=${values.username}&password=${values.password}&roleState=${true}`).then(res=>{
            // console.log(res.data)
            if(res.data.length ===0 ){
                // console.log('用户名与密码不匹配')
                message.error("用户名密码不匹配")
            }else{
                // localstorage 只能存字符串， json字符串转化
                localStorage.setItem("token",JSON.stringify(res.data[0]))
                this.props.history.push(`/home`) //跳转到首页
            }
        })

        //todo - ajax 
        //跳转页面
        // console.log(this.props)
        //
    };


}
