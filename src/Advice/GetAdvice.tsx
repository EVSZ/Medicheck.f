import React, { useState } from "react";
import axios from 'axios'
import './GetAdvice.css'

export default function GetAdvice() {

    function AdviceCall(){
        let userid = localStorage.getItem("userId")
        axios.post('http://localhost:8080/algorithm/getAdvice/' + userid)
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