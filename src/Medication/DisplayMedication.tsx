import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DisplayMedication.css'

export default function DisplayMedication() {
    return (
        <div className="DisplayMedContainer">
             <div className="element">
                <label className="formLabel">Search
                <div className="customTextBox">
                        <FontAwesomeIcon className="textBoxIcon" icon={["fas", "search"]} />
                        <input type="text" />
                    </div>
                </label>
            </div>
            <div className="element">
                <table className="Table">
                    <tr>
                        <th>
                            Medicatie
                        </th>
                        <th>
                            Selectie
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Heroine
                            <div className="tblLabelContainer">
                                <label className="customLabel" id="danger">PM</label>
                                <label className="customLabel" id="danger">PP</label>
                            </div>
                        </td>
                        <td>
                            <button className="btnSmall btnNormal">Voeg Toe</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            AWW YAH
                            <div className="tblLabelContainer">
                                <label className="customLabel" id="danger">LUL</label>
                                <label className="customLabel" id="danger">PP</label>
                                <label className="customLabel" id="danger">MONGO</label>
                            </div>
                        </td>
                        <td>
                            <button className="btnSmall btnNormal">Voeg Toe</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Daddy juice
                            <div className="tblLabelContainer">

                            </div>
                        </td>
                        <td>
                            <button className="btnSmall btnNormal">Voeg Toe</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="element">
                <table className="Table">
                    <tr>
                        <th>Status</th>
                        <th>
                            <FontAwesomeIcon className="tableDangerIcon" color="#414042" icon={["fas", "capsules"]} />
                        Geneesmiddel
                        </th>
                        <th>Dosering</th>
                        <th>
                            Ontvangen op
                            <FontAwesomeIcon className="tableDangerIcon" color="#414042" icon={["fas", "sort"]} />
                        </th>
                        <th className="scary">
                            <FontAwesomeIcon className="tableDangerIcon" color="red" icon={["fas", "exclamation-triangle"]} />
                            Medicatie Bewakingssingalen
                            </th>
                        <th>

                        </th>
                    </tr>
                    <tr>
                        <td>
                            <label className="customLabel" id="info">In bestelling</label>
                        </td>
                        <td>
                            Heroine
                            <div className="tblLabelContainer">
                                <label className="customLabel" id="danger">PM</label>
                                <label className="customLabel" id="danger">PP</label>
                            </div>
                        </td>
                        <td>
                            2.1t/2
                        </td>
                        <td>
                            01-01-2029
                        </td>
                        <td>
                            <label>
                                Contra-indicatie 044
                            </label>
                            <label>
                                astma
                            </label>
                        </td>
                        <td>
                            <button className="btnSmall btnDanger">Verwijder</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="customLabel" id="info">Klaarmaken</label>
                        </td>
                        <td>
                            AWW YAH
                            <div className="tblLabelContainer">
                                <label className="customLabel" id="danger">LUL</label>
                                <label className="customLabel" id="danger">PP</label>
                                <label className="customLabel" id="danger">MONGO</label>
                            </div>
                        </td>
                        <td>
                            2.1t/2
                        </td>
                        <td>
                            01-01-2029
                        </td>
                        <td>
                            <label>
                                Contra-indicatie 044
                            </label>
                            <label>
                                astma
                            </label>
                        </td>
                        <td>
                            <button className="btnSmall btnDanger">Verwijder</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="customLabel" id="info">Ontvangen</label>
                        </td>
                        <td>
                            Daddy juice
                            <div className="tblLabelContainer">

                            </div>
                        </td>
                        <td>
                            2.1t/2
                        </td>
                        <td>
                            01-01-2029
                        </td>
                        <td>
                            <label>
                                Contra-indicatie 044
                            </label>
                            <label>
                                astma
                            </label>
                        </td>
                        <td>
                            <button className="btnSmall btnDanger">Verwijder</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
