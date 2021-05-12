import React, {useState } from 'react'
import { Card,Button,Table,Space,Modal } from 'antd';
import { PlusOutlined ,ArrowRightOutlined} from '@ant-design/icons';
import {reqCategory,reqAddCategory} from '../../api/index'
import './index.less'
import AddCategory from './AddCategory'
import ChangeCategory from './ChangeCategory'
import PubSub from 'pubsub-js'
export default function Category() {
    // 钩子函数
    let [data,setData] =  useState([])
    let [subdata,setSubData] =  useState([])
    let [parentid,setParentid] = useState("0") 
    let [parentname,setParentname] = useState('') 
    let [ModelStatus,setModelStatus] = useState(0) //0:都不显示 1:添加分类 2:修改分类
    let [info,setInfo] = useState({})
    let [one,setOne] = useState('')
    let [two,setTwo] = useState('')
    // 一部请求
    async function getCategory(parentid) {
      let  res = await reqCategory(parentid)
      if(parentid === '0') {
        setData(data => res.data)
      }else {
        setSubData(subdata = res.data)
      }
    }
    // 请求二级菜单
    const getSubdata = (text) => {
      setParentid(text._id)
      setParentname(text.name)
      setSubData([])
    }
    // 显示一级
    const showFirst = () => {
      setParentid("0")
      setParentname("")
    }
    // 显示添加分类模态框
    function showaddCategory() {
      setModelStatus(1)
    }
    // 显示修改分类模态框
    function showChange(text) {
      setInfo(text)
      setModelStatus(2)
    }
    // 取消模态框显示
    function handleCancel() {
      setModelStatus(0)
    }
    // 添加模态框 确定后的回调 然后隐藏模态框
    async function handleaddCategoryOk() {
      PubSub.publish('add')
      // 关闭窗口
      handleCancel()
      await reqAddCategory(one,two)
      
     
    }
    // 修改模态框确定后的回调  然后隐藏模态框
    async function handleaddChangeOk() {
      // 发布事件
      PubSub.publish('getid',{info:info._id})
      // 隐藏窗口
      handleCancel()
      // 发送请求
      //  let res =  await reqUpdate(info._id,id)
      //  重新渲染列表
      setTimeout(() => {
        getCategory(parentid)
      }, 100);
    }
    const add = (a,b) => {
       setOne(a)
       setTwo(b)
    }

    React.useEffect(() => {
      getCategory(parentid)
      if(one && two) {
        handleaddCategoryOk()
      }
    },[parentid,parentname,one,two]) // eslint-disable-line react-hooks/exhaustive-deps

    const title = parentid === "0" ? "一级分类" : (
      <div>
        <span style={{cursor:"pointer",color:'rgb(29,165,122)'}} onClick={() => {showFirst()}}>一级分类</span>
        <ArrowRightOutlined style={{margin:'0 20px'}}/>
        <span>{parentname}</span>
      </div>
    )

    const button = (
        <Button type="primary" icon={<PlusOutlined />} onClick={() => {showaddCategory()}}>
            添加
        </Button>
    )
    
    const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a>{text}</a>,
          },
          {
            title: 'Action',
            key: 'action',
            width:300,
            render: (text, record) => (
              <Space size="middle">
                <li style={{cursor:"pointer",color:'rgb(29,165,122)'}} onClick={() => {showChange(text)}}>修改分类</li>
                {
                  parentid === "0" ? <li style={{cursor:"pointer",color:'rgb(29,165,122)'}}onClick={() => {getSubdata(text)}}>查看子分类</li> : null
                }
              </Space>
            ),
          },
    ]
    return (
      <div className='category'>
        {
          <div>
               <Card title={title} extra={button}>
               <Table columns={columns} dataSource={parentid === '0' ? data :subdata} loading={data.length === 0} bordered rowKey='_id'  pagination={{defaultPageSize:6,showQuickJumper:true,showSizeChanger:false}}/>
               </Card>
          </div>        
        }
         <Modal title="添加信息" visible={ModelStatus === 1} onOk={handleaddCategoryOk} onCancel={handleCancel}>
          <AddCategory categorys={data} parentId={parentid} add={add} ></AddCategory>
        </Modal>

        <Modal title="修改分类" visible={ModelStatus === 2} onOk={handleaddChangeOk} onCancel={handleCancel}>
          <ChangeCategory info={info} ></ChangeCategory>
        </Modal>
      </div>
    )
}

