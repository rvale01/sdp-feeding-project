import React, {useEffect} from "react";

// redux
import { useDispatch, useSelector } from 'react-redux'
import { roomsSelector, statusSelector, getRoomsList } from './slice'


//components
import { Table, Card, Typography } from 'antd';
import { Link } from "react-router-dom";
const { Title } = Typography;

const columns = [
    {
      title: 'Id',
      dataIndex: 'room_id',
    },
    {
      title: 'Patient Id',
      dataIndex: 'patient_id',
      render: (value, index) => (
        <Link to={`/patients-details/${value}`} key={index}>{value}</Link>
      ),
    },
    {
      title: 'Staff email', 
      dataIndex: 'staff_email',
    }
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