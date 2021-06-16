import React, { useState } from "react";
import axios from 'axios'
import './GetAdvice.css'

export default function GetAdvice() {

    function AdviceCall(){
        axios.post(`http://localhost:8080/algorithm/getAdvice/` + localStorage.getItem('userId'))

        .then((response) => {
            alert(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="GetAdviceContainer">
           <h3>Advies Generator</h3>
           <button className="btnLarge btnNormal" onClick={AdviceCall}>Start!</button>
        </div>
    )
}