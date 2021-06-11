import React, { useState } from "react";
import axios from 'axios'
import './GetAdvice.css'

export default function GetAdvice() {

    return (
        <div className="GetAdviceContainer">
           <h3>Advies Generator</h3>
           <button className="btnLarge btnNormal">Start!</button>
        </div>
    )
}