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
      dataIndex: 'id',
    },
    {
      title: 'Full Name',
      dataIndex: 'full_name',
    },
    {
      title: 'Allergies',
      dataIndex: 'allergies',
    },
    {
        title: 'Allergies',
        dataIndex: 'allergies',
    },
    {
      title: 'Awaiting Tests',
      dataIndex: 'awaiting_tests',
      render: (tests, index) => (
        <>
            <Tag color={tests === 0 ? "#2db7f5" : "#87d068"} key={index}>
                {tests === 0 ? "None": tests}
            </Tag>
        </>
      ),
    },
    {
      title: 'Estimated Leave Date',
      dataIndex: 'estimated_leave_date',
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

export const PatientsList = () =>{
    const dispatch = useDispatch()
    const patientsList = useSelector(patientsSelector)
    const status = useSelector(statusSelector)
    const [selectedTab, setSelectedTab] = useState("All")

    useEffect(()=>{
        // TODO: filter the list once the database is up to date
        dispatch(getPatientsList())
    }, [])
    
    return (
      <div>
        <Title>
          Patients List
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
                dataSource={patientsList ? patientsList : null}
                loading={status === 'loading'}
            />
        </Card>
      
      </div>
    )
}