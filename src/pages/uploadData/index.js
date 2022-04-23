import React, {useRef} from "react";

//components
import { Card, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faSpinner } from '@fortawesome/free-solid-svg-icons'

import { statusSelector, uploadCSV } from './slice'
import { useDispatch, useSelector } from "react-redux";
import Papa from 'papaparse'

const { Title } = Typography;

export const UploadData = () =>{
    const dispatch = useDispatch()
    const status = useSelector(statusSelector)
    const inputFileRef = useRef();
    
    const handleClick = e => {
        const [file] = e.target.files;
        Papa.parse(file, {
            complete: function(results) {
                dispatch(uploadCSV({file:results}))
            }
        })
    }

    const handleBtnClick = () => {
        inputFileRef.current.click();
     }

    return (
        <div>
            <Title>
                UploadData
            </Title>
            <input type="file" id="myFile" accept=".csv"  ref={inputFileRef} onChange={handleClick} style={{visibility:'hidden'}}/>

            <div className="upload-data-container">
                <Card className="criclebox upload-data-card">
                    {status === 'loading' ? 
                        <FontAwesomeIcon icon={faSpinner} className="loading-spinner" style={{fontSize: '3rem'}} onClick={handleBtnClick}/>
                    :
                        <FontAwesomeIcon icon={faFileCirclePlus} style={{fontSize: '3rem'}} onClick={handleBtnClick}/>
                    }
                </Card>
            </div>
        </div>
    )
}