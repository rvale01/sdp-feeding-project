import React from "react";

//components
import { Card, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'


const { Title } = Typography;


export const UploadData = () =>{
    return (
        <div>
            <Title>
                UploadData
            </Title>

            <div className="upload-data-container">
                <Card className="criclebox upload-data-card">
                    <FontAwesomeIcon icon={faFileCirclePlus} style={{fontSize: '3rem'}}/>
                </Card>
            </div>
        </div>
    )
}