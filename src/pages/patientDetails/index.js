import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getPatient, singlePatientSelector, patientsSelector } from '../patientList/slice'

//components
import { Typography, Input, Tag } from 'antd';
const { Title, Text } = Typography;

export const PatientDetails = () =>{
    const dispatch = useDispatch()
    const singlePatient = useSelector(singlePatientSelector)

    useEffect(()=>{
        dispatch(getPatient())
    }, [])

    const handleDisplay = (id) => {
        if(singlePatient && id in singlePatient && singlePatient[id] !== null) return singlePatient[id]

        return "None"
    }

    return (
        <div>
            <Title className="vertical-align gap-2">
                {singlePatient && singlePatient.full_name} - {singlePatient && singlePatient.id} 
                {
                    singlePatient && singlePatient.referred 
                    ? 
                        <Tag color="#87d068">Referred</Tag>
                    : 
                        <Tag color="#f50">Not Referred</Tag>
                }
            </Title>
            <div className="grid-2">

                <div>
                    <Text strong>Admission Date</Text>
                    <Input disabled value={handleDisplay("admission_date")}/>
                </div>

                <div>
                    <Text strong>Estimated Leave Date</Text>
                    <Input disabled value={handleDisplay("estimated_leave_date")}/>
                </div>

                <div>
                    <Text strong>Medication Needed</Text>
                    <Input disabled value={handleDisplay("medication_needed")}/>
                </div>

                <div>
                    <Text strong>Last Medicated</Text>
                    <Input disabled value={handleDisplay("last_medicated")}/>
                </div>

                <div>
                    <Text strong>Allergies</Text>
                    <Input disabled value={handleDisplay("allergies")}/>
                </div>

                <div>
                    <Text strong>Awaiting Tests</Text>
                    <Input disabled value={handleDisplay("awaiting_tests")}/>
                </div>

                <div>
                    <Text strong>Test Reviewed</Text>
                    <Input disabled value={handleDisplay("test_reviewed")}/>
                </div>

                <div>
                    <Text strong>Emergency Contact</Text>
                    <Input disabled value={handleDisplay("emergency_contact")}/>
                </div>

                <div>
                    <Text strong>Resuscitation Preference</Text>
                    <Input disabled value={handleDisplay("resuscitation_preference")}/>
                </div>
                {/* 
                    TODO: display one by one
                    <Text strong>CSV data</Text>
                    <Input disabled/> 
                */}
            </div>
        </div>
    )
}