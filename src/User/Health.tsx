import React from 'react'
import './Health.css'

export default function HealthInfo() {
    return (
            <div className="HealthInfoForm">
                <div>
                    <h3>Gezondheid
            </h3>
                </div>
                <div className="element">
                    <label className="formLabel">ClCr Waarde
                    <input type="number" min="0" />
                    </label>
                </div>
                <div className="element">
                    <label className="formLabel">ClCr Datum
                    <input type="date" />
                    </label>
                </div>
                <div className="element">
                    <label className="formLabel">Bloeddruk HOOG
                    <input type="number" min="0" />
                    </label>
                </div>
                <div className="element">
                    <label className="formLabel">Bloeddruk LAAG
                    <input type="number" min="0" />
                    </label>
                </div>
                <div className="element">
                    <button className="btnSmall btnNormal" type="submit">Sla gegevens op</button>
                </div>
            </div>
    )
}