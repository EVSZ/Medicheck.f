import React, { useState } from "react";
import axios from 'axios'
import './GetAdvice.css'

export default function GetAdvice() {

    function AdviceCall(){
        axios.get('http://localhost:8080/api/getAdvice')
        .then((res) => {
            console.log(res.data);
        })
        .catch(() => {

        })
    }

    return (
        <div className="GetAdviceContainer">
           <h3>Advies Generator</h3>
           <button className="btnLarge btnNormal" onClick={AdviceCall}>Start!</button>
        </div>
    )
}