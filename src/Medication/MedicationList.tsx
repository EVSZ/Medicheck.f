import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";
import { setUncaughtExceptionCaptureCallback } from 'node:process';
import axios from 'axios';

export interface Medication {
    MedicationID: number;
    Name: string;
    Discription: string;
    MedicineType: number;
    GetCurrentMedicationList: () => Medication[];
}

function MedicationList() {

    const [input, setInput] = useState<string>("");
    const [MedList, setMedlist] = useState<Medication[]>([]);
    const [searchedMed, setSearchedMed] = useState<Medication[]>([]);
    const [addedMedList] = useState<Medication[]>([]);

    const GetMedlist = async () => {
        axios.get('http://localhost:8080/api/medication/getAll')
        .then((response) => {
            setMedlist(response.data);
            localStorage.setItem('MedicationList', JSON.stringify(response.data))
        })
        .catch((error) => {
            console.log(error);
        })
          
      }
    const SetLocalMedicationList = async () => {
        localStorage.setItem('MedicationList', JSON.stringify(MedList))
    }

    const searchClick=() => {
        MedList.forEach(element => {
                if (element.Name.includes(input) && input.length > 2)
                {
                    searchedMed.push(element);
                }
            
        });
    }

    const addClick=(index: number) => {
        addedMedList.push(searchedMed[index])
        searchedMed.splice(index,1)
        localStorage.setItem('MedicationList', JSON.stringify(MedList))
    }

    const removeClick=(index:number) => {
        addedMedList.splice(index, 1);
    }
    function GetCurrentMedicationList() : void
    {
        setMedlist(JSON.parse(localStorage.getItem('MedicationList')!))
    }

    function returnSearchMedList(searchedMed: string[]) {
        let medlist = searchedMed.map((string, index) => 
            <div key={index}>
                <li>{string}</li>
                <button onClick={() => addClick(index)}>VoegToe</button>
            </div>
        );
        return medlist;
    }
    
    function returnMedList(addedMedList: string[]) {
        let medlist = addedMedList.map((string, index) => 
            <div key={index}>
                <li>{string}</li>
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
                {returnSearchMedList}
            </div>
            <div>
                <h5>Uw toegevoegde medicatie:</h5>
                {returnMedList}
            </div>
            <div>
                <button value="Medication opslaan" onClick={SetLocalMedicationList}></button>
            </div>
        </div>
    );
}

export default MedicationList;