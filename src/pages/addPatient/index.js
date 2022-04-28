import React, {useRef} from "react";

//components

import { addPatient, statusSelector } from './slice'
import { useDispatch, useSelector } from "react-redux";

import { Typography, Input, Button } from 'antd';
const { Title, Text } = Typography;

export const AddPatient = () =>{
    const dispatch = useDispatch()
    const status = useSelector(statusSelector)

    const submitBtn = () => {
        var results = document.getElementById("f_n").value + ","
        results += document.getElementById("a_d").value + ","
        results += document.getElementById("e_l_d").value + ","
        results += document.getElementById("m_n").value + ","
        results += document.getElementById("l_m").value + ","
        results += document.getElementById("a").value + ","
        results += document.getElementById("a_t").value + ","
        results += document.getElementById("t_r").value + ","
        results += document.getElementById("e_c").value + ","
        results += document.getElementById("r_p").value + ","
        results += document.getElementById("r").value + ","
        results += document.getElementById("e_t_c").value + ","
        results += document.getElementById("f_v").value + ","
        results += document.getElementById("f_v_a").value + ","
        results += document.getElementById("f2").value + ","
        results += document.getElementById("f2_r").value + ","
        results += document.getElementById("i_t").value + ","
        results += document.getElementById("o_f_r").value + ","
        results += document.getElementById("peep").value + ","
        results += document.getElementById("pip").value + ","
        results += document.getElementById("r_r").value + ","
        results += document.getElementById("s").value + ","
        results += document.getElementById("t_v").value + ","
        results += document.getElementById("t_v_a").value + ","
        results += document.getElementById("t_v_k").value + ","
        results += document.getElementById("t_v_s").value + ","
        results += document.getElementById("bmi").value + ","
        results += document.getElementById("email").value
        dispatch(addPatient({string:results}))
    }

    return (
        <div>
            <Title>
                Create Patient
            </Title>

            <div className="grid-3">
                
                <div>
                    <Text strong>Full Name</Text>
                    <Input id="f_n"/>
                </div>

                <div>
                    <Text strong>Admission Date</Text>
                    <Input id="a_d"/>
                </div>

                <div>
                    <Text strong>Estimated Leave Date</Text>
                    <Input id="e_l_d"/>
                </div>

                <div>
                    <Text strong>Medication Needed</Text>
                    <Input id="m_n"/>
                </div>

                <div>
                    <Text strong>Last Medicated</Text>
                    <Input id="l_m"/>
                </div>

                <div>
                    <Text strong>Allergies</Text>
                    <Input id="a"/>
                </div>

                <div>
                    <Text strong>Awaiting Tests</Text>
                    <Input id="a_t"/>
                </div>

                <div>
                    <Text strong>Test Reviewed</Text>
                    <Input id="t_r"/>
                </div>

                <div>
                    <Text strong>Emergency Contact</Text>
                    <Input id="e_c"/>
                </div>

                <div>
                    <Text strong>Resuscitation Preference</Text>
                    <Input id="r_p"/>
                </div>

                <div>
                    <Text strong>Referral</Text>
                    <Input id="r"/>
                </div>

                <div>
                    <Text strong>end_tidal_co2</Text>
                    <Input id="e_t_c"/>
                </div>
                
                <div>
                    <Text strong>feed_vol</Text>
                    <Input id="f_v"/>
                </div>

                <div>
                    <Text strong>feed_vol_adm</Text>
                    <Input id="f_v_a"/>
                </div>

                <div>
                    <Text strong>fio2</Text>
                    <Input id="f2"/>
                </div>
                
                <div>
                    <Text strong>fio2_ratio</Text>
                    <Input id="f2_r"/>
                </div>

                <div>
                    <Text strong>insp_time</Text>
                    <Input id="i_t"/>
                </div>

                <div>
                    <Text strong>oxygen_flow_rate</Text>
                    <Input id="o_f_r"/>
                </div>

                <div>
                    <Text strong>peep</Text>
                    <Input id="peep"/>
                </div>

                <div>
                    <Text strong>pip</Text>
                    <Input id="pip"/>
                </div>   
                
                <div>
                    <Text strong>resp_rate</Text>
                    <Input id="r_r"/>
                </div>   

                <div>
                    <Text strong>sip</Text>
                    <Input id="s"/>
                </div> 

                <div>
                    <Text strong>tidal_vol</Text>
                    <Input id="t_v"/>
                </div> 

                <div>
                    <Text strong>tidal_vol_actual</Text>
                    <Input id="t_v_a"/>
                </div> 

                <div>
                    <Text strong>tidal_vol_kg</Text>
                    <Input id="t_v_k"/>
                </div> 

                <div>
                    <Text strong>tidal_vol_spon</Text>
                    <Input id="t_v_s"/>
                </div> 

                <div>
                    <Text strong>bmi</Text>
                    <Input id="bmi"/>
                </div>

                <div>
                    <Text strong>Doctor's Email</Text>
                    <Input id="email"/>
                </div>
            </div>

            <Button 
                    type="primary" 
                    size="large" 
                    loading = {status === 'loading'}
                    onClick={submitBtn}
                >
                    Add Patient
                </Button>
        </div>
    )
}