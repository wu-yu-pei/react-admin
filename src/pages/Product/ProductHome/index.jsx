import React, { Component } from 'react'
import {Card,Form,Button,Input,Select} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const Option = Select.Option
export default class ProductHome extends Component {

    render() {
        const title = (
            <span>
                <Select style={{width:150}}>
                    <Option>按名称搜索</Option>
                    <Option>按描述搜索</Option>
                </Select>
                <Input placeholder="关键字"></Input>
                {/* <Button>搜索</Button> */}
            </span>
        )
        const extra = (
            <div>
                <Button><PlusOutlined />添加商品</Button>
            </div>
        )
        return (
            <div>
                <Card title={title} extra={extra} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}
