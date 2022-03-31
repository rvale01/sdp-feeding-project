import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getPatient, singlePatientSelector } from '../patientList/slice'

//components
import { Typography, Input } from 'antd';
const { Title } = Typography;

export const PatientDetails = () =>{
    const dispatch = useDispatch()
    const singlePatient = useSelector(singlePatientSelector)

    useEffect(()=>{
        const id = window.location.pathname.replace("/patients-details/", "")
        dispatch(getPatient(id))
        console.log(singlePatient)
    }, [])
    return (
        <div>
            <Title>
                Title: PatientDetails
            </Title>

            <>
                <Input/>
            </>
        </div>
    )
}