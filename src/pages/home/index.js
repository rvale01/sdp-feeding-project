import React, { useEffect } from "react";
import { patientsData, patientsDataSelector } from './slice'
import { Pie, Column } from '@ant-design/plots';
//components
import { Typography } from 'antd';
import { useSelector, useDispatch } from "react-redux";
const { Title } = Typography;

export const Home = () =>{
    return (
        <div>
            <Title>
                Title: Home
                <ReferralPie/>
            </Title>
        </div>
    )
}

const ReferralPie = () =>{
    const dispatch = useDispatch()
    const patientData = useSelector(patientsDataSelector)
    useEffect(()=>{
        dispatch(patientsData())
    })
    const data = [
        {
          type: 'need referral',
          value: patientData.need_referral,
        },
        {
          type: 'no referral',
          value: patientData.no_need_referral,
        },
      ];
    
      const config = {
        // appendPadding: 10,
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

      return (<Pie height={300} {...config} />)
}