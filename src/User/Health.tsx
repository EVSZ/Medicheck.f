import React from 'react'
import './Health.css'

interface healthInformation{
    clcr: number
    setClcr: React.Dispatch<React.SetStateAction<number>>
    lastclcr: string
    setLastclcr: React.Dispatch<React.SetStateAction<string>>
}

interface iClcr {
    clcr: number
    setClcr: React.Dispatch<React.SetStateAction<number>>
}

interface iLastclcr {
    lastclcr: string
    setLastclcr: React.Dispatch<React.SetStateAction<string>>
}

export default function HealthInfo({Clcr, Lastclcr}: {Clcr: iClcr, Lastclcr: iLastclcr}) {

    return (
            <div className="HealthInfoForm">
                <div>
                    <h3>Gezondheid</h3>
                </div>
                <div className="element">
                    <label className="formLabel">ClCr Waarde
                    <input type="number" min="0" onChange={(e) => {Clcr.setClcr(parseInt(e.target.value))}} />
                    </label>
                </div>
                <div className="element">
                    <label className="formLabel">ClCr Datum
                    <input type="date" onChange={(e) => {Lastclcr.setLastclcr(e.target.value)}} />
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