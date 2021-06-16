import React, { useState } from "react";
import axios from 'axios'
import './GetAdvice.css'

export default function GetAdvice(props: any) {

    function AdviceCall(){
        let userid = localStorage.getItem("userId")
        axios.post('http://localhost:8080/algorithm/getAdvice/' + userid)
        .then((res) => {
            props.Advice(res.data);
        })
    }

    return (
        <div className="GetAdviceContainer">
           <h3>Advies Generator</h3>
           <button className="btnLarge btnNormal" onClick={AdviceCall}>Start!</button>
        </div>
    )
}