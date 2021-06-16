import './Styleguide.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Styleguidetest() {
    return (
        <div className="container">
            <div className="element">
                <button className="btnImage"><FontAwesomeIcon icon={["fas", "file"]} /></button>
                <button className="btnImageOutline"><FontAwesomeIcon icon={["fas", "sync-alt"]} /></button>
                <button className="btnSmall btnNormal">Small normal</button>
                <button className="btnMedium btnOutline">Medium outline</button>
                <button className="btnLarge btnDanger">Large danger</button>
            </div>
            <div className="element">
                <label className="checkBox">Inactive
                    <input type="checkbox" />
                    <span className="customCheck"></span>
                </label>
                <label className="checkBox">Active
                    <input type="checkbox" checked={true} />
                    <span className="customCheck"></span>
                </label>
                <label className="checkBoxD">Disabled
                    <input type="checkbox" disabled />
                    <span className="customCheck"></span>
                </label>
            </div>
            <div className="element">
                <label className="radioButton">Inactive
                <input type="radio" />
                    <span className="customRadio"></span>
                </label>
                <label className="radioButton">Active
                <input type="radio" checked={true} />
                    <span className="customRadio"></span>
                </label>
                <label className="radioButtonD">Disabled
                <input type="radio" disabled={true} />
                    <span className="customRadio"></span>
                </label>
            </div>
            <div className="element">
                <label className="formLabel">Basic input
                    <input type="text" placeholder="type..." />
                </label>
            </div>
            <div className="element">
                <label className="formLabel">Succesful input
                    <input className="success" type="text" />
                </label>
            </div>
            <div className="element">
                <label className="formLabel">Failed input
                    <input className="fail" type="text" />
                    <label className="formLabelError">You have failed :c</label>
                </label>
            </div>
            <div className="element">
                <label className="formLabel">Search
                <div className="customTextBox">
                        <FontAwesomeIcon className="textBoxIcon" icon={["fas", "search"]} />
                        <input type="text" />
                    </div>
                </label>
            </div>
            <div className="element">
                <label className="textArea formLabel">Text area
                    <textarea />
                </label>
            </div>
            <div className="elementL">
                <label className="customLabel" id="plain">Plain</label>
                <label className="customLabel" id="primary">Primair</label>
                <label className="customLabel" id="info">Informatie</label>
                <label className="customLabel" id="warning">Waarschuwing</label>
                <label className="customLabel" id="danger">danger</label>
                <label className="customLabel" id="success">success</label>
                <label className="customLabel" id="tooltip">tooltip</label>
            </div>
            <div className="element">
                <table className="table">
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
                    </tr>
                </table>
            </div>
        </div>
    )
};