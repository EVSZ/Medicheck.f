import React from 'react'
import './Health.css'

interface healthInformation{
    clcr: number
    setClcr: React.Dispatch<React.SetStateAction<number>>
    lastclcr: string
    setLastclcr: React.Dispatch<React.SetStateAction<string>>
}



export default function HealthInfo({healthinformation}: {healthinformation: healthInformation}) {

    return (
            <div className="HealthInfoForm">
                <div>
                    <h3>Gezondheid</h3>
                </div>
                <div className="element">
                    <label className="formLabel">ClCr Waarde
                    <input type="number" min="0" max="5000" step="1" onChange={(e) => {healthinformation.setClcr(parseInt(e.target.value))}} />
                    </label>
                </div>
                <div className="element">
                    <label className="formLabel">ClCr Datum
                    <input type="date" onChange={(e) => {healthinformation.setLastclcr(e.target.value)}} />
                    </label>
                </div>
                {/* <div className="element">
                    <label className="formLabel">Bloeddruk HOOG
                    <input type="number" min="0" />
                    </label>
                </div>
                <div className="element">
                    <label className="formLabel">Bloeddruk LAAG
                    <input type="number" min="0" />
                    </label>
                </div> */}
            </div>
    )
}