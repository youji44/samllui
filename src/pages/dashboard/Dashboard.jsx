import React, { useState } from 'react'
import { Space, Popconfirm, Table, Select } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import View from './view'
import { useDispatch } from 'react-redux'
import { actionsApi, useShareSelector } from '../../shared'
import { useEffect } from 'react'
import { ModuleInfo, ActionButton } from '../../components'
import Pusher from "pusher-js";
import { Alert } from '../../components'
import moment from 'moment/moment'
import { updateUserRequest, removeUser } from "./apis"
import useSound from 'use-sound';
import sound from "../sound.mp3"
import sound2 from "../sound2.mp3"
// import { removeClient } from './apiCalls';

const Dashboard = () => {
  const dispatch = useDispatch()
  const [play1] = useSound(sound);
  const [play2] = useSound(sound2);
  const { data, loading } = useShareSelector(state => state?.dashboard)
  const [state, setState] = useState([])
  const [deletee, setDeletee] = useState([])
  const [visiblemodal, setVisibleModal] = useState(false);
  const [viewData, setViewData] = useState(null)
  const [updating, setUpdating] = useState(false)
  
  useEffect(() => {
    dispatch(actionsApi?.loadDashboard())
    const pusher = new Pusher('9de74d5973e05bb9941d', {
      cluster: 'ap2',
    });
    var storeChannel = pusher.subscribe('newProject');
    storeChannel.bind('justTest', (data) => {
      Alert('success', JSON.stringify(data?.name) + ' store his details')
      dispatch(actionsApi?.loadDashboard())
      play1()
    });

    var visitChannel = pusher.subscribe('visitorEvent');
    visitChannel.bind('justTest', (data) => {
      Alert('success', JSON.stringify(data?.name) + ' browse our website')
      play2()
    });

  }, [])
  useEffect(() => {
    setState([...data])
    setDeletee(new Array(data?.length).fill([false, false]))
  }, [data])

  const removeRow = async (recordID) => {
    await removeUser(recordID)
    dispatch(actionsApi?.dashboardResponse([...data?.filter(row => row?.id !== recordID)]))
    setDeletee(deletee?.fill([false, false]))
  }
  const handleChange = async (value, index, id) => {
    setUpdating(true)
    dispatch(actionsApi?.dashboardResponse(data?.map(row => {
      if (row?.id === id)
        return ({
          ...row,
          enable: value
        })
      return row
    })
    ))

    await updateUserRequest({ id, enable: value })
    setUpdating(false)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Date Time',
      dataIndex: 'dateTime',
      render: data => moment(data).format('MMMM Do YY, h:mm')
    },
    {
      title: 'IP Address',
      dataIndex: 'ipAddress',
    },
    {
      title: 'ISP',
      dataIndex: 'isp'
    },
    {
      title: 'Browser',
      dataIndex: 'browsersDetails',
    },
    {
      title: 'Request Status',
      dataIndex: 'enable',
      render: (data, row, index) =>
        <Select
          style={{ width: '100px' }}
          value={data}
          disabled={updating}
          onChange={(value) => { handleChange(value, index, row?.id) }}
        >
          <Select.Option value={'1'}>Pending</Select.Option>
          <Select.Option value={'2'}>Approve</Select.Option>
          <Select.Option value={'3'}>Cancel</Select.Option>
        </Select>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (data, row, r) => (
        <Space>
          {/* <ActionButton 
                    title='view user'
                    icon={<EyeOutlined />}
                    onClick={()=>{setVisibleModal(true);setViewData(row)}}
                    /> */}
          <Popconfirm
            title="Remove user?"
            visible={deletee[r][0]}
            onConfirm={() => { setDeletee(deletee?.map((_, d) => d === r ? [true, true] : _)); removeRow(row?.id) }}
            okButtonProps={{
              loading: deletee[r][1],
            }}
            onCancel={() => { setDeletee(deletee?.map(_ => [false, false])) }}
          >
            <ActionButton
              noToolTip
              icon={<DeleteOutlined />}
              danger
              onClick={() => { setDeletee(deletee?.map((_, d) => d === r ? [true, false] : [false, false])) }}
            />
          </Popconfirm>
        </Space>
      )
    },
  ]
  return (
    <>
      <ModuleInfo
        name='Dashboard'
      />
      <Table
        columns={columns}
        dataSource={state}
        loading={loading}
        pagination={false}
      />
      <View
        visible={visiblemodal}
        viewData={viewData}
        onClose={() => { setVisibleModal(false) }}
      />
    </>
  );
};

export default Dashboard