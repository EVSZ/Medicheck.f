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

    const [input, setInput] = useState<string>("");
    const [MedList, setMedlist] = useState<Medication[]>([]);
    const [searchedMed] = useState<Medication[]>([]);
    const [addedMedList] = useState<Medication[]>([]);

    const GetMedlist = async () => {
        axios.get('http://localhost:8080/api/medication/getAll')
        .then((response) => {
            setMedlist(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const searchClick=() => {
        GetMedlist();
        searchedMed.splice(0, searchedMed.length);

        MedList.forEach(element => {
            if (element.name.includes(input)){
                searchedMed.push(element);
            }
        });
    }

    const addClick=(index: number) => {
        addedMedList.push(searchedMed[index])
    }

    const removeClick=(index:number) => {
        addedMedList.splice(index, 1);
    }

    function returnSearchMedList(searchedMed: Medication[]) {
        let medlist = searchedMed.map((Medication, index) => 
            <div key={index}>
                <li>{Medication.name}</li>
                <button onClick={() => addClick(index)}>VoegToe</button>
            </div>
        );
        return medlist;
    }
    
    function returnMedList(addedMedList: Medication[]) {
        let medlist = addedMedList.map((Medication, index) => 
            <div key={index}>
                <li>{Medication.name}</li>
                <button onClick={() => removeClick(index)}>Verwijder</button>
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
                <button onClick={searchClick}>Zoek</button>
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