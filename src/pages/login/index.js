import React, {useRef} from "react";

// redux
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, statusSelector } from './slice'


//components
import { Button, Input, Card, Typography } from 'antd';
const { Title } = Typography;

export const Login = () =>{
    const dispatch = useDispatch()
    const status = useSelector(statusSelector)

    // details inputted by the user in the form. Those details are saved only when the user clicks the login btn
    const email = useRef()
    const pass = useRef()
    
    return (
        <Card className="criclebox login-page">
            <Title level={2}>Sign In</Title>
            <Input placeholder="email" ref={email}/>
            <Input.Password placeholder="password" ref={pass}/>
            <Button 
                type="primary" 
                size="large" 
                loading = {status === 'loading'}
                onClick={() => dispatch(loginUser({email:email.current.input.value, password: pass.current.input.value}))}>
                Sign In
            </Button>
        </Card>
    )
}