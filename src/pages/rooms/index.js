import React, {useEffect, useState} from "react";

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getPatientsList, patientsSelector, statusSelector } from './slice'


//components
import { Table, Tag, Button, Card, Radio, Typography } from 'antd';
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
      title: 'Stuff',
      dataIndex: 'stuff',
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
    const [selectedTab, setSelectedTab] = useState("All")

    useEffect(()=>{
        // TODO: filter the list once the database is up to date
        dispatch(getRoomsList())
    }, [])
    
    return (
      <div>
        <Title>
          Rooms List
        </Title>
        <Card className="criclebox">
            <Radio.Group
                options={["All", "Needs Referral"]}
                onChange={(selected)=>setSelectedTab(selected.target.value)}
                value={selectedTab}
                optionType="button"
                buttonStyle="solid"
                style={{marginBottom: '20px'}}
            />
            <Table
                columns={columns}
                dataSource={roomsList ? roomsList : null}
                loading={status === 'loading'}
            />
        </Card>
      
      </div>
    )
}