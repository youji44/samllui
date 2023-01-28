import React, { useState } from 'react';
import { useNavigate, Route, Routes} from 'react-router-dom'
import "antd/dist/antd.less"
import "./index.css"
import { useShareDispatch, actionsApi} from '../shared';
import {
  LineChartOutlined,
  UserOutlined,
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  SettingOutlined,
  ExportOutlined,
  ClockCircleOutlined
  } from '@ant-design/icons';
import { Layout, Menu, Button, Image, Avatar, Dropdown, Space,Badge, Typography} from 'antd';
import { domainUrl2 } from '../shared';
import { Alert } from '../components';
import Dashboard from './dashboard/Dashboard';
import { useEffect } from 'react';
import useSound from 'use-sound';
import sound from './sound.mp3'
import Pusher from "pusher-js";
import { unreadNotification } from './dashboard/apis';
const { Header, Sider, Content} = Layout;
const { Title } = Typography

function AdminPanel() {
  const appDispatcher=useShareDispatch()
  let navigate = useNavigate();
  const [play] = useSound(sound);

  const [collapsed, setCollapsed]= useState(false);
  const [notificationCount, setNotificationCount]= useState(0)
  
  function getItem(label, key, icon, onClick,children, type) {
    return {key, icon, onClick, children, label, type}
  }
  const [items, setItems]= useState([])
  useEffect(()=>{
    let itemsArr=[]
    itemsArr.push(getItem('Dashboard', '1',<LineChartOutlined />, ()=>{navigate("/", { replace: true })}))
    setItems([...itemsArr])
    getNotificationCount()
    //
    console.log("sound:", sound)
    // const pusher = new Pusher('9de74d5973e05bb9941d', {
    //   cluster: 'ap2',
    // });
    // var channel = pusher.subscribe('newProject');
    // channel.bind('justTest', (data)=> {
    //  play()
    //  getNotificationCount()
    // });
  },[])

  const getNotificationCount=async ()=>{
   let count= await unreadNotification()
   setNotificationCount(count)
  }
  const logout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("userRole")
    appDispatcher(actionsApi?.loginClear())
    window.location.href='/'
    
    return
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userToken}`);
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    fetch(domainUrl2+'/logout',requestOptions)
    .then(response=>response.json())
    .then(result=>{
      if(result?.success)
        console.log("result")
      else
        throw 'error'
    })
    .catch((error)=>Alert("error",'error while logging out'))
  }

  const droplist = (
    <Menu style={{borderRadius: "3px",transform:'translateY(10px)'}}
      items={[
        {
          label: <Space style={{fontSize:"14px"}}><UserOutlined /> <a href="/" style={{color:"gray"}}>Profile</a></Space>,
          key: '0',
        },
        {
          label: <Space style={{fontSize:"14px"}}><SettingOutlined /> <span style={{color:"gray"}}>Account Setting</span></Space>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <Space style={{fontSize:"14px"}} onClick={logout}><ExportOutlined /> <a href="/" style={{color:"red"}}>Logout</a></Space>,
          key: '3',
        },
      ]}
    />
  );
  const Notification = (

    <Menu style={{borderTop: "4px solid #7fb691",borderRadius: "12px"}}
      items={[
        {
          label: <Space size={20} style={{fontSize:"16px" ,padding:"10px",borderBottom:"2px solid #7fb691",width:"100%"}}>
                    <Title level={5}>Notifications</Title>
                  </Space>,
          key: '0',
        },
        {
          label: <Space direction='vertical' size={20} 
                  style={{fontSize:"14px" ,marginBottom:"10px",width:"100%",height:"260px",overflowY:"scroll"}}>
                    <Space style={{fontSize:"14px" ,marginBottom:"10px",width:"100%"}}>
                      <Image src='assets/maya.jpg' className='roundedImg' /> 
                        <a href="/" style={{color:"gray"}}>
                          <Space direction='vertical' size={0}>
                              <Title level={5} style={{fontSize:"14px",marginBottom:"0px",color:"gray"}}>James Sare</Title>
                              <p style={{color:"gray",marginBottom:"0px"}}>
                                lorem lorem lorem lorem loremm lorem
                              </p>
                              <Space size={5}>
                                  <ClockCircleOutlined />
                                  <p style={{color:"gray",marginBottom:"0px"}}>
                                    3 min ago
                                  </p>
                              </Space>
                          </Space>
                        </a>
                    </Space>
                    <Space style={{fontSize:"14px" ,marginBottom:"10px",width:"100%"}}>
                      <Image src='assets/maya.jpg' className='roundedImg' /> 
                        <a href="/" style={{color:"gray"}}>
                          <Space direction='vertical' size={0}>
                              <Title level={5} style={{fontSize:"14px",marginBottom:"0px",color:"gray"}}>James Sare</Title>
                              <p style={{color:"gray",marginBottom:"0px"}}>
                                lorem lorem lorem lorem loremm lorem
                              </p>
                              <Space size={5}>
                                  <ClockCircleOutlined />
                                  <p style={{color:"gray",marginBottom:"0px"}}>
                                    3 min ago
                                  </p>
                              </Space>
                          </Space>
                        </a>
                    </Space>
                    <Space style={{fontSize:"14px" ,marginBottom:"10px",width:"100%"}}>
                      <Image src='assets/maya.jpg' className='roundedImg' /> 
                        <a href="/" style={{color:"gray"}}>
                          <Space direction='vertical' size={0}>
                              <Title level={5} style={{fontSize:"14px",marginBottom:"0px",color:"gray"}}>James Sare</Title>
                              <p style={{color:"gray",marginBottom:"0px"}}>
                                lorem lorem lorem lorem loremm lorem
                              </p>
                              <Space size={5}>
                                  <ClockCircleOutlined />
                                  <p style={{color:"gray",marginBottom:"0px"}}>
                                    3 min ago
                                  </p>
                              </Space>
                          </Space>
                        </a>
                    </Space>
                  </Space>,
          key: '1',
        },
        {
          label: <Space className='btnCheck' size={20} style={{fontSize:"16px" ,width:"100%"}}>
                    <Button type='button' className='checkAll'>Check All</Button>
                  </Space>,
          key: '2',
        },
      ]}
    />
  );
  return (
    <Layout style={{height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh',overflowY:'auto'}}>
        <div className="logo" style={{display:'flex',justifyContent:'center'}}>
          <Image
            width={'80%'}
            height={'auto'}
            src="./assets/images/sidebar-logo.png"
          />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display:'flex',
            justifyContent:'center'
          }}
        >
          <div style={{width:'95%',display:'flex',justifyContent:'space-between'}}>
            {
              React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })
            }
            <Space size={30}>
                {/* <Dropdown overlay={Notification} trigger={['click']} 
                  style={{padding:"15px",left:'1286px !important',top:'50px !important'}}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space size={10}>
                        <Badge count={notificationCount}>
                          <Avatar  icon={<BellOutlined />} />
                        </Badge>
                      </Space>
                    </a>
                </Dropdown> */}
               
                <Dropdown overlay={droplist} trigger={['click']} 
                    style={{padding:"15px",left:'1286px !important',top:'50px !important'}}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space size={10}>
                          <Avatar  icon={<UserOutlined />} />
                          <Title level={5} style={{fontSize:"14px",marginBottom:"0px",color:"rgba(0, 0, 0, 0.45)"}}>Mr Hacker</Title>
                          <DownOutlined style={{color:"rgba(0, 0, 0, 0.45)"}} />
                      </Space>
                    </a>
                </Dropdown>
              </Space>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflowY:'auto'
          }}
        > 
          <Routes>
              <Route path="/"  element={<Dashboard/>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminPanel;
