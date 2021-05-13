import React, { Component } from 'react'
import {Card,Button,Input,Select, Table, Space } from 'antd'
import {reqProduct} from '../../../api/index'
import { PlusOutlined } from '@ant-design/icons';
import LinkButton from '../../../components/LinkButton'
import {PAGE_SIZE} from '../../../untils/constant'
const Option = Select.Option
export default class ProductHome extends Component {
    // 商品数组
    state = {
        products:[],
        total:''
    }

    // 请求Product数据
    getProduct =async (pagenum) => {
        this.setState({products:[]})
       let res = await reqProduct(pagenum,5)
       console.log(res);
        if(res.status === 0) {
            const {total,list} = res.data
            console.log(total);
            this.setState({products:list,total})
        }
    }
    // 初始化columns
    initcolumns = () => {
        this.columns = [
            {
              title: '商品名称',
              dataIndex: 'name',
              key: 'name',
              render: text => <LinkButton>{text}</LinkButton>,
            },
            {
              title: '商品描述',
              dataIndex: 'desc',
              key: 'desc',
            },
            {
              title: '价格',
              dataIndex:'price',
              render: (price) => {
                 return "￥" + price
              }
            },
            {
              title: '状态',
              width: 100,
              key: 'tags',
              dataIndex:'status',
              render: tags => (
                  tags === 1 ? <Button type="primary">在售</Button> : <Button type="primary">下架</Button>
              ),
            },
            {
              width:100,
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <Button>详情</Button>
                  <Button>修改</Button>
                </Space>
              ),
            },
        ];
    }

    componentWillMount() {
        this.initcolumns()
    }
    componentDidMount() {
        this.getProduct(1)
    }
    render() {
        const {products,total} = this.state
        const title = (
            <span style={{width:500}}>
                <Select style={{width:150}}>
                    <Option value="1">按名称搜索</Option>
                    <Option value="2">按描述搜索</Option>
                </Select>
                <Input placeholder="关键字" style={{width:100,margin:"0 10px"}}></Input>
                <Button>搜索</Button>
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
                <Table rowKey='_id' columns={this.columns} loading={products.length === 0} onChange={pagenum => this.getProduct(pagenum.current)} dataSource={products} bordered pagination={{defaultPageSize:PAGE_SIZE,total,showQuickJumper:true,showSizeChanger:false}} />
                </Card>
            </div>
        )
    }
}
