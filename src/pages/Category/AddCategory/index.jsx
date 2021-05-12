import React, { Component } from 'react'
import {Form,Select,Input} from 'antd'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
const { Option } = Select;
const {Item} = Form
export default class index extends Component {
    static propTypes = {
        categorys:PropTypes.array.isRequired,
        parentId:PropTypes.string.isRequired
    }
    componentDidMount() {
        PubSub.subscribe('add',(_,res) => {
            // console.log(this.e.state.value);
            this.props.add(this.props.parentId,this.e.state.value)
        })
    }
    render() {
        const {parentId} = this.props
        return (
            <Form>
                <Item label="所属分类" >
                <Select defaultValue={parentId} rules={[{required: true,message: 'Please input your Username!'}]}>
                <Option  value="0">一级分类</Option>
                    {
                        this.props.categorys.map(e => {
                           return <Option key={e._id} value={e._id}>{e.name}</Option>
                        })
                    }
                </Select>
                </Item>
                <Item label="分类名称"  rules={[{required: true,message: 'Please input your Username!'}]}>
                    <Input ref={e => this.e = e} placeholder="请输入分类名称" />
                </Item>
            </Form>
        )
    }
}
