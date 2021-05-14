import React, { Component } from 'react'
import {Card,List} from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';
const Item = List.Item
export default class ProductDetial extends Component {
    state = {
        name:'',
        desc:'',
        price:'',
        imgs: '',
        detail:''
    }
    getdetial =async () => {
        // 从路由中取出数据
        const {name,price,imgs,desc,detail} = this.props.location.state
        this.setState({name,desc,price,imgs,detail})
    }
    // 回退
    back() {
        this.props.history.go(-1)
    }
    componentDidMount() {
        this.getdetial()
    }
    render() {
        const {name,price,imgs,desc,detail} = this.state
        const title = (
            <span>
            <ArrowLeftOutlined onClick={() => this.back()} style={{margin:'0 15px',fontSize:20,color:'green'}}/>
            <span style={{fontSize:18}}>商品详情</span>
            </span>
        )
        return (
            <div>
                <Card title={title} className='productdetail'>
                    <List>
                        <Item>
                            <div>
                            <span className='left'>商品名称：</span>
                            <span style={{color:'#1DA57A'}}>{name}</span>
                            </div>
                        </Item>
                        <Item>
                            <div>
                            <span className='left'>商品描述：</span>
                            <span style={{color:'#1DA57A'}}>{desc}</span>
                            </div>
                        </Item>
                        <Item>
                            <div>
                            <span className='left'>商品价格：</span>
                            <span style={{color:'#1DA57A'}}>{price}</span>
                            </div>
                        </Item>
                        <Item>
                            <div>
                            <span className='left'>所属分类：</span>
                            <span style={{color:'#1DA57A'}}>电脑 -> 笔记本</span>
                            </div>
                        </Item>
                        <Item>
                            <div>
                            <span className='left'>商品图片：</span>
                            <span style={{color:'#1DA57A'}}>    
                               {
                               imgs.length !==0 && imgs[0] !== null && imgs[0].match(/.jpg$/)  ? imgs.map((item,index) => {
                                    return <img src={item} alt="" key={index} />
                                }) : ''
                               }
                            </span>
                            </div>
                        </Item>
                        <Item>
                            <div style={{display:'flex'}}>
                            <span className='left'>商品评价：</span>
                            <span style={{color:'#1DA57A'}} dangerouslySetInnerHTML={{__html:detail}}>
                            </span>
                            </div>
                        </Item>
                    </List>
                </Card>
            </div>
        )
    }
}
