import React, { Component } from 'react'
import {Form,Input} from 'antd'
import PubSub from 'pubsub-js'
import {reqUpdate} from '../../../api/index'
const {Item} = Form
export default class index extends Component {
    componentDidMount() {
        PubSub.subscribe('getid',async(_,res) => {
           await reqUpdate(res.info,this.e.props.value)
        })
    }
    render() {
        return (
            <Form 
            >  
                <Item
                name="name"
                label="分类名称"
                >
                    <Input ref={e => this.e = e} placeholder="请输入分类名称,回车后确认" onChange={this.get} />
                </Item>
            </Form>
        )
    }
}
