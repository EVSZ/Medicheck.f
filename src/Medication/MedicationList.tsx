import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";
import axios from 'axios';

export interface Medication {
    id: number;
    name: string;
    Description: string;
    medicineType: number;
    GetCurrentMedicationList: () => Medication[];
}

function MedicationList() {

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
            console.log(error);
        })
    }

    let searchClick=() => {
        GetMedlist();
        searchedMed.splice(0, searchedMed.length);

        MedList.forEach(element => {
            if (element.name.includes(input)){
                searchedMed.push(element);
            }
        });
    }

    let addClick=(index: number) => {
        addedMedList.push(searchedMed[index])
    }

    let removeClick=(index:number) => {
        addedMedList.splice(index, 1);
    }

    function returnSearchMedList(searchedMed: Medication[]) {
        let medlist = searchedMed.map((Medication, index) => 
            <div key={index}>
                <li>{Medication.name}</li>
                <button onMouseUp={() => addClick(index)}>VoegToe</button>
            </div>
        );
        return medlist;
    }
    
    function returnMedList(addedMedList: Medication[]) {
        let medlist = addedMedList.map((Medication, index) => 
            <div key={index}>
                <li>{Medication.name}</li>
                <button onMouseUp={() => removeClick(index)}>Verwijder</button>
            </div>
        );
        return medlist;
    }

    return (
        <div className="list">
            
            <div>
                <h5>Zoek uw medicatie:</h5>
                <input type="text" value={input} placeholder="Zoek medicatie" onChange={(e) => {setInput(e.target.value)}} />
            </div>
            <div>
                <button onMouseUp={searchClick}>Zoek</button>
            </div>
            <div>
                <h5>Gevonden medicatie:</h5>
                {returnSearchMedList(searchedMed)}
            </div>
            <div>
                <h5>Uw toegevoegde medicatie:</h5>
                {returnMedList(addedMedList)}
            </div>
        </div>
    );
}

export default MedicationList;