import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import{withRouter} from 'react-router-dom'
import memoryUntil from '../../untils/memoryUntil.js';
import storeUntil from '../../untils/storeUntil';
const MyModel = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // 退出
  const out = () => { 
    // 删除储存的用户信息
    storeUntil.removeUser()
    // 清空memoryUntil里面储存的数据   如果没有删除 会造成退出异常
    memoryUntil.user = {}
    // 替换路由
    props.history.replace('/login')
  }

  const showModal = () => {
    console.log(props);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    out()
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{color:'#000'}}>
        退出
      </Button>
      <Modal okText="确认" cancelText="取消" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p style={{textAlign:'center',margin:'30px 0 10px',fontSize:'20px'}}>确定退出吗?</p>
      </Modal>
    </>
  );
};
export default withRouter(MyModel)