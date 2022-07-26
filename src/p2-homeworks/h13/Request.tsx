import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./Api/RequestApi";
import stl from "./Request.module.css";

const Request = () => {
    let [success, setSucces] = useState<boolean>(true)
    let [message, setMessage] = useState<string>(`Push 'Request'`)
    const onChckboxChange = () => {
        setSucces(!success)
    }
    const onButtonClick = () => {
        requestAPI.request(success)
            .then((res) => {
                setMessage(res.data.errorText)

            })
            .catch((error) => {
                setMessage(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div className={stl.wrapper}>
            <hr/>
            homework 13
            <div className={stl.requestWrapper}>
                <SuperButton className={stl.button} onClick={onButtonClick}>"Request"</SuperButton>
                <SuperCheckbox onClick={onChckboxChange} checked={success}>Success</SuperCheckbox>
            </div>
            <div className={stl.information}>{message}</div>
        </div>
    );
};

export default Request;