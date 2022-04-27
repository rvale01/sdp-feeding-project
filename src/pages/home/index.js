import React, { useEffect, useState } from "react";
import { patientsData, patientsDataSelector } from './slice'
import { Pie, Column } from '@ant-design/plots';
//components
import { Typography, Card } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
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
          
          <div style={{display: 'flex', gap: 20}}>
            <Card className="criclebox" style={{width:'40%'}}>
              <Title level={3}>
                Reports
              </Title>
              {patientData ?
                <ReferralPie need_referral={patientData.need_referral} no_need_referral={patientData.no_need_referral}/>
              : null}
            </Card>
            
            <div>
              <div style={{display: 'flex', gap: 20}}>
                <Card className="criclebox" style={{width:'fit-content', height: '12rem'}}>
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

                <Card className="criclebox" style={{width:'fit-content', height: '12rem'}}>
                  <Title level={3}>
                    Doctor on Duty
                  </Title>
                  <div className="doctors-card">
                    <FontAwesomeIcon icon={faUserDoctor} style={{fontSize: 50}}/>
                    <br/>
                    Doctor Michael
                  </div>
                </Card>

                <Card className="criclebox" style={{width:'fit-content', height: '12rem'}}>
                  <Title level={3}>
                    {`Date & Time`}
                  </Title>
                  {` ${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`}
                </Card>
              </div>
              
              <Title level={2} style={{marginTop: '3.5rem'}}>
                Shortcuts
              </Title>
              <div style={{display: 'flex', gap: 20}}>
                <Card className="criclebox" style={{width:'100%', height: '100%', backgroundColor: '#eb4034', textAlign: 'center'}}>
                <Link to="/upload-data">
                  <Title level={3} style={{color: 'white'}}>
                      Add csv
                  </Title>
                </Link>
                </Card>

                <Card className="criclebox" style={{width:'100%', height: '100%', backgroundColor: '#d4c157', textAlign: 'center'}}>
                <Link to="/users">
                  <Title level={3} style={{color: 'white'}}>
                      Users
                  </Title>
                  </Link>
                </Card>

                <Card className="criclebox" style={{width:'100%', height: '100%', backgroundColor: '#2d4880', textAlign: 'center'}}>
                <Link to="/patients-list">
                  <Title level={3} style={{color: 'white'}}>
                      Patients
                  </Title>
                </Link>
                </Card>
              </div>
            </div>
          </div>
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

