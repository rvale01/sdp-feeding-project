import React, { useEffect } from "react";
import { patientsData, patientsDataSelector } from './slice'
import { Pie, Column } from '@ant-design/plots';
//components
import { Typography, Card } from 'antd';
import { useSelector, useDispatch } from "react-redux";
const { Title } = Typography;

export const Home = () =>{
  const dispatch = useDispatch()
  const patientData = useSelector(patientsDataSelector)
  useEffect(()=>{
    dispatch(patientsData())
  }, [])

    return (
        <div>
            <Title>
                Title: Home
            </Title>
            
            <Card className="criclebox" style={{width:'fit-content'}}>
              {patientData ?
                <ReferralPie need_referral={patientData.need_referral} no_need_referral={patientData.no_need_referral}/>
              : null}
            </Card>

            <Card className="criclebox" style={{width:'fit-content'}}>
              <Title level={3}>
                Patients data
              </Title>
              {
                patientData ?
              <p>
                Total patients: {patientData.need_referral.length + patientData.no_need_referral.length} <br/> 
                Needs referral:  {patientData.need_referral.length} <br/> 
                Do not need referral: {patientData.no_need_referral.length} <br/> 
              </p>
              : null }
            </Card>
        </div>
    )
}

const ReferralPie = ({need_referral, no_need_referral}) =>{
      const data = [
          {
            type: 'need referral',
            value: parseInt(need_referral.length),
          },
          {
            type: 'no referral',
            value: parseInt(no_need_referral.length),
          },
        ];
      
        const config = {
          data,
          angleField: 'value',
          colorField: 'type',
          radius: 0.5,
          label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
              fontSize: 14,
              textAlign: 'center',
            },
          },
          interactions: [
            {
              type: 'element-active',
            },
          ],
        };

      return <Pie height={300} {...config} />
}