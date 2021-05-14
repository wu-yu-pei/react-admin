import React, { Component } from 'react'
import {Card,Button,Input,Select, Table, Space } from 'antd'
import {reqProduct,reqSearchProduct} from '../../../api/index'
import {  PlusOutlined } from '@ant-design/icons';
import LinkButton from '../../../components/LinkButton'
import {PAGE_SIZE} from '../../../untils/constant'
const Option = Select.Option
export default class ProductHome extends Component {
    // 商品数组
    state = {
        //展示的商品
        products:[],
        total:'',
        // 搜索类型
        type:'productName',
        // 搜索框value
        value:'',
        // loading状态值
        bool:false
    }

    // 请求Product数据
    getProduct =async (pagenum) => {
        this.setState({bool:true})
        let res = await reqProduct(pagenum,5)
        if(res.status === 0) {
            const {total,list} = res.data
            this.setState({products:list,total})
            this.setState({bool:false})
        }
    }
    // 跳转到详情界面
    goDetial(text) {
        this.props.history.push(`/product/detial`,text)
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
                  <Button onClick={() => {return this.goDetial(text)}}>详情</Button>
                  <Button>修改</Button>
                </Space>
              ),
            },
        ];
    }
    //
   async Search() {
        this.setState({bool:true})
        let res = await reqSearchProduct(1,5,this.state.type,this.state.value)
        if(res.status === 0) {
            if(res.data.list.length === 0) {
                alert("很抱歉，没有搜寻到你查找的数据！")
                this.setState({bool:false})
            }
            else {
                this.setState({products:res.data.list,total:res.total})
                this.setState({bool:false})
            }
            
        }
    } 
    componentWillMount() {
        this.initcolumns()
    }
    componentDidMount() {
        this.getProduct(1)
    }
    render() {
        const {products,total,type,value,bool} = this.state
        const title = (
            <span style={{width:500}}>
                <Select value={type} style={{width:150}} onChange={thevalue => this.setState({type:thevalue})}>
                    <Option value="productName">按名称搜索</Option>
                    <Option value="productDesc">按描述搜索</Option>
                </Select>
                <Input placeholder="关键字" style={{width:100,margin:"0 10px"}} value={value} onChange={e => this.setState({value:e.target.value})}></Input>
                <Button onClick={() => {this.Search()}}>搜索</Button>
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
                <Table rowKey='_id' columns={this.columns} loading={bool} onChange={pagenum => this.getProduct(pagenum.current)} dataSource={products} bordered pagination={{defaultPageSize:PAGE_SIZE,total,showQuickJumper:true,showSizeChanger:false}} />
                </Card>
            </div>
        )
    }
}
