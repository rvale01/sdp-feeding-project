import React, {useRef} from "react";

//components
import { Card, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'


const { Title } = Typography;

export const UploadData = () =>{
    const inputFileRef = useRef();
    const handleClick = () =>{
        const path = document.getElementById("myFile").files[0].path
        console.log(path)
    }
    const handleBtnClick = () => {
        inputFileRef.current.click();
     }
    return (
        <div>
            <Title>
                UploadData
            </Title>
            <input type="file" id="myFile" ref={inputFileRef} onChange={handleClick} style={{visibility:'hidden'}}/>

            <div className="upload-data-container">
                <Card className="criclebox upload-data-card">
                    <FontAwesomeIcon icon={faFileCirclePlus} style={{fontSize: '3rem'}} onClick={handleBtnClick}/>
                </Card>
            </div>
        </div>
    )
}