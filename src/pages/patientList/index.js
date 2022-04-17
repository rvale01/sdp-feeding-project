import React, {useEffect, useState} from "react";

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getPatientsList, patientsSelector, statusSelector } from './slice'
import { Link } from "react-router-dom";


//components
import { Table, Tag, Card, Radio, Typography } from 'antd';
const { Title } = Typography;

export const PatientsList = () =>{
    const dispatch = useDispatch()
    const patientsList = useSelector(patientsSelector)
    const [filteredList, setFilteredList] = useState()
    const status = useSelector(statusSelector)
    const [selectedTab, setSelectedTab] = useState("All")


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
        title: 'Needs Referral',
        dataIndex: 'referral',
        render: (referral, index) => (
          <>
              <Tag color={referral === 0 ? "#f50" : "#87d068"} key={index}>
                  {referral === 0 ? "No": "Yes"}
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
          <Link to={`/patients-details/${value.id}`} key={index}>Open...</Link>
        ),
      },
    ];

    useEffect(()=>{
        dispatch(getPatientsList())
    }, [])

    useEffect(()=>{
      if(selectedTab === "All"){
        setFilteredList(patientsList)
      }else{
        setFilteredList(patientsList.filter((value)=>value.referral === 1))
      }
    }, [selectedTab, patientsList])
    
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
                dataSource={filteredList ? filteredList : null}
                loading={status === 'loading'}
            />
        </Card>
      </div>
    )
}