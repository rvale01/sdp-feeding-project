import React, {useEffect, useState} from "react";

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, usersSelector, statusSelector, newUserStatusSelector, addUser } from './slice'


//components
import { Table, Button, Card, Typography, Modal, Input, Select } from 'antd';
const { Title, Text } = Typography;
const { Option } = Select;

export const Users = () =>{
    const dispatch = useDispatch()
    const usersList = useSelector(usersSelector)
    const status = useSelector(statusSelector)
    const newUserStatus = useSelector(newUserStatusSelector)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [role, setRole] = useState('admin')
    const [password, setPassword] = useState()
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()


    const columns = [
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Full Name',
        dataIndex: 'full_name',
      },
      {
        title: 'Role',
        dataIndex: 'role',
      }
    ];

    useEffect(()=>{
        dispatch(getUsers())
    }, [])

    useEffect(()=>{
      if(newUserStatus === 'success'){
        setIsModalVisible(false)
      }
    }, [newUserStatus])
    
    return (
      <>
      <div>
        <div className="header-style">
          <Title>
            Patients List
          </Title>
          <Button onClick={()=>setIsModalVisible(true)} type="primary">
            Add User
          </Button>
        </div>
        <Card className="criclebox">
            <Table
                columns={columns}
                dataSource={usersList}
                loading={status === 'loading'}
            />
        </Card>
      </div>

      <Modal 
        title="Add new user" 
        visible={isModalVisible}
        footer={[
          <Button onClick={()=>dispatch(addUser({email, password, fullName, role}))} loading={newUserStatus === 'loading'}>
          Add User
          </Button>,
        ]}
      >
        <div>
          <Text strong>Full Name</Text>
          <Input type="text" onChange={(event)=>setFullName(event.target.value)}/>
        </div>

        <div>
          <Text strong>Email</Text>
          <Input type="email" onChange={(event)=>setEmail(event.target.value)}/>
        </div>

        <div>
          <Text strong>Role</Text>
          <Select defaultValue="admin" onChange={(event)=>setRole(event.target.value)}>
            <Option value="admin">Admin</Option>
            <Option value="doctor">Doctor</Option>
            <Option value="nurse">Nurse</Option>
          </Select>
        </div>

        <div>
          <Text strong>Password</Text>
          <Input type="password" onChange={(event)=>setPassword(event.target.value)}/>
        </div>
      </Modal>
      </>
    )
}