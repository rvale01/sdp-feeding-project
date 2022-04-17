import React, {useEffect, useState} from "react";

// redux
import { useDispatch, useSelector } from 'react-redux'
import { roomsSelector, statusSelector, getRoomsList } from './slice'


//components
import { Table, Button, Card, Radio, Typography } from 'antd';
const { Title } = Typography;

const columns = [
    {
      title: 'Id',
      dataIndex: 'room_id',
    },
    {
      title: 'Name',
      dataIndex: 'patient_name',
    },
    {
      title: 'Staff', 
      dataIndex: 'staff',
    },
    {
      title: '',
      dataIndex: '',
      render: (value, index) => (
        <Button  
          key={index} 
          type="link" 
          onClick={()=> window.location.replace(`${window.location.origin}/patients-details/${value.id}`)}
        >
          Open...
        </Button>
      ),
    },
  ];

export const RoomsList = () =>{
    const dispatch = useDispatch()
    const roomsList = useSelector(roomsSelector)
    const status = useSelector(statusSelector)

    useEffect(()=>{
        dispatch(getRoomsList())
    }, [])
    
    return (
      <div>
        <Title>
          Rooms List
        </Title>
        <Card className="criclebox">
            <Table
                columns={columns}
                dataSource={roomsList ? roomsList : null}
                loading={status === 'loading'}
            />
        </Card>
      
      </div>
    )
}