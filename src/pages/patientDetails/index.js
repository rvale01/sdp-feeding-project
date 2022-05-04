import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getPatient, singlePatientSelector, setReferred, setReferredStatusSelector } from '../patientList/slice'
import { faHeart, faLungs, faThermometer, faMaskVentilator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components
import { Typography, Input, Tag, Card, Button } from 'antd';
const { Title, Text } = Typography;

export const PatientDetails = React.memo(() =>{
    const dispatch = useDispatch()
    const singlePatient = useSelector(singlePatientSelector)
    const status = useSelector(setReferredStatusSelector)

    useEffect(()=>{
        dispatch(getPatient())
    }, [])

    const handleDisplay = (id) => {
        if(singlePatient && id in singlePatient && singlePatient[id] !== null && singlePatient[id] !== "") return singlePatient[id]
        return "None"
    }

    return (
        <div style={{opacity: status==='loading' ? '0.5' : '1', pointerEvents: status==='loading' ? 'none' : 'inherit'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Title className="vertical-align gap-2">
                    {singlePatient && singlePatient.full_name} - {singlePatient && singlePatient.id} 
                    {
                        singlePatient && singlePatient.referred 
                        ? 
                            <Tag color="#87d068">Needs referral</Tag>
                        : 
                            <Tag color="#f50">Does not need referral</Tag>
                    }
                </Title>
                {singlePatient && singlePatient.referred
                ? <Button onClick={()=>dispatch(setReferred({id: '39393'}))}>
                    Set as Referred
                    </Button>
                : null}
            </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div className="grid-4">
                <Card className="criclebox">
                    <div className="monitor-card">
                        <FontAwesomeIcon icon={faHeart} className="heart" style={{fontSize: '3rem', color: '#c93838'}}/>
                        <Title>
                            {Math.floor((Math.random() * 5) + 80)}
                        </Title>
                    </div>
                </Card>

                <Card className="criclebox">
                    <div className="monitor-card">
                        <FontAwesomeIcon icon={faLungs} style={{fontSize: '3rem', color: '#3260a8'}}/>
                        <Title>
                            {Math.floor((Math.random() * 5) + 100)}
                        </Title>
                    </div>
                </Card>

                <Card className="criclebox">
                    <div className="monitor-card">
                        <FontAwesomeIcon icon={faThermometer} style={{fontSize: '3rem', color: '#13d41d'}}/>
                        <Title>
                            {Math.floor((Math.random() * 40) + 360)/10}
                        </Title>
                    </div>
                </Card>

                <Card className="criclebox">
                    <div className="monitor-card">
                    <FontAwesomeIcon icon={faMaskVentilator} style={{fontSize: '3rem', color: '#13d4bd'}}/>
                    <Title>
                        {Math.floor((Math.random() * 30) + 15)}
                    </Title>
                    </div>
                </Card>
            </div>
            <div className="grid-3">
                
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

                <div>
                    <Text strong>end_tidal_co2</Text>
                    <Input disabled value={handleDisplay("end_tidal_co2")}/>
                </div>
                
                <div>
                    <Text strong>feed_vol</Text>
                    <Input disabled value={handleDisplay("feed_vol")}/>
                </div>

                <div>
                    <Text strong>feed_vol_adm</Text>
                    <Input disabled value={handleDisplay("feed_vol_adm")}/>
                </div>

                <div>
                    <Text strong>fio2</Text>
                    <Input disabled value={handleDisplay("fio2")}/>
                </div>
                
                <div>
                    <Text strong>fio2_ratio</Text>
                    <Input disabled value={handleDisplay("fio2_ratio")}/>
                </div>

                <div>
                    <Text strong>insp_time</Text>
                    <Input disabled value={handleDisplay("insp_time")}/>
                </div>

                <div>
                    <Text strong>oxygen_flow_rate</Text>
                    <Input disabled value={handleDisplay("oxygen_flow_rate")}/>
                </div>

                <div>
                    <Text strong>peep</Text>
                    <Input disabled value={handleDisplay("peep")}/>
                </div>

                <div>
                    <Text strong>pip</Text>
                    <Input disabled value={handleDisplay("pip")}/>
                </div>   
                
                <div>
                    <Text strong>resp_rate</Text>
                    <Input disabled value={handleDisplay("resp_rate")}/>
                </div>   

                <div>
                    <Text strong>sip</Text>
                    <Input disabled value={handleDisplay("sip")}/>
                </div> 

                <div>
                    <Text strong>tidal_vol</Text>
                    <Input disabled value={handleDisplay("tidal_vol")}/>
                </div> 

                <div>
                    <Text strong>tidal_vol_actual</Text>
                    <Input disabled value={handleDisplay("tidal_vol_actual")}/>
                </div> 

                <div>
                    <Text strong>tidal_vol_kg</Text>
                    <Input disabled value={handleDisplay("tidal_vol_kg")}/>
                </div> 

                <div>
                    <Text strong>tidal_vol_spon</Text>
                    <Input disabled value={handleDisplay("tidal_vol_spon")}/>
                </div> 

                <div>
                    <Text strong>bmi</Text>
                    <Input disabled value={handleDisplay("bmi")}/>
                </div> 
            </div>
        </div>
        </div>
    )
})