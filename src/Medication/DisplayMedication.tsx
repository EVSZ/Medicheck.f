import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DisplayMedication.css'
import { propTypes } from "react-bootstrap/esm/Image";

export interface Medication {
    id: number;
    name: string;
    discription: string;
    medicineType: number;
    GetCurrentMedicationList: () => Medication[];
}

interface userPrescriptions{medicine: Medication};

interface iMeds {
    ups: userPrescriptions[];
    setUps: React.Dispatch<React.SetStateAction<userPrescriptions[]>>
}

export default function DisplayMedication({iMeds}: {iMeds: iMeds}) {
    let [input, setInput] = useState<string>("");
    let [MedList, setMedlist] = useState<Medication[]>([]);
    let [searchedMed] = useState<Medication[]>([]);
    let [addedMedList] = useState<Medication[]>([]);

    let GetMedlist = async () => {
        axios.get('http://localhost:8080/api/medication/getAll')
        .then((response) => {
            setMedlist(response.data);
        })
        .catch((error) => {
            
        })
    }

    let searchClick=() => {
        GetMedlist();
        searchedMed.splice(0, searchedMed.length);

        MedList.forEach(element => {
            if (element.name.includes(input.toLowerCase())){
                searchedMed.push(element);
            }
        });
    }

    let addClick=(index: number) => {
        addedMedList.push(searchedMed[index]);
        let userPrescription: userPrescriptions = {medicine: searchedMed[index]};
        iMeds.ups.push(userPrescription);
    }

    const removeClick=(index:number) => {
        addedMedList.splice(index, 1);
        iMeds.ups.splice(index, 1);
    }

    function returnSearchMedList(searchedMed: Medication[]) {
        let medlist = searchedMed.map((Medication, index) => 
            <tr key={index}>
                <td>
                    {Medication.name}
                    {/* <div className="tblLabelContainer">
                        <label className="customLabel" id="danger">PM</label>
                        <label className="customLabel" id="danger">PP</label>
                    </div> */}
                </td>
                <td>
                    <button className="btnSmall btnNormal" onClick={() => addClick(index)}>Voeg Toe</button>
                    
                </td>
            </tr>
        );
        return medlist;
    }
    
    function returnMedList(addedMedList: Medication[]) {
        let medlist = addedMedList.map((Medication, index) =>
            <tr key={index}>
                {/* <td>
                    <label className="customLabel" id="info">{Medication.medicineType}</label>
                </td> */}
                <td>
                    {Medication.name}
                    {/* <div className="tblLabelContainer">
                        <label className="customLabel" id="danger">PM</label>
                        <label className="customLabel" id="danger">PP</label>
                    </div> */}
                </td>
                {/* <td>
                    01-01-2029
                </td> */}
                <td>
                    <label>
                        {Medication.discription}
                    </label>
                </td>
                <td>
                    <button className="btnSmall btnDanger" onClick={() => removeClick(index)}>Verwijder</button>
                </td>
            </tr>
        );
        return medlist;
    }
    
    return (
        <div className="DisplayMedContainer">
             <div className="element">
                <label className="formLabel">Search
                <div className="customTextBox">
                        <FontAwesomeIcon className="textBoxIcon" icon={["fas", "search"]} onClick={searchClick} />
                        <input type="text" placeholder="Zoek medicatie bij naam" onChange={(e) => {setInput(e.target.value)}} />
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
                    {returnSearchMedList(searchedMed)}
                </table>
            </div>
            <div className="element">
                <table className="Table">
                    <tr>
                        {/* <th>Type</th> */}
                        <th>
                            <FontAwesomeIcon className="tableDangerIcon" color="#414042" icon={["fas", "capsules"]} />
                        Geneesmiddel
                        </th>
                        {/* <th>
                            Ontvangen op
                            <FontAwesomeIcon className="tableDangerIcon" color="#414042" icon={["fas", "sort"]} />
                        </th> */}
                        <th>
                            {/* <FontAwesomeIcon className="tableDangerIcon" color="red" icon={["fas", "exclamation-triangle"]} /> */}
                            Medicatie Description
                        </th>
                        <th>
                        </th>
                    </tr>
                    {returnMedList(addedMedList)}
                </table>
            </div>
        </div>
    )
}
