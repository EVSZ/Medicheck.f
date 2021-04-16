import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";
<<<<<<< Updated upstream
import { setUncaughtExceptionCaptureCallback } from 'node:process';
=======
import axios from 'axios';
>>>>>>> Stashed changes

export interface Medication {
    MedicationID: number;
    Name: string;
    Discription: string;
    MedicineType: number;
}

function MedicationList() {

    const [MedList, setMedlist] = useState<Medication[]>([]);

    const [input, setInput] = useState<string>();

    const [searchedMed, setSearchedMed] = useState<string>("");
    const [addedMedList] = useState<string[]>([]);

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
<<<<<<< Updated upstream
        let found: boolean = false;

        tempMedList.forEach(element => {
            if (input === element && !found){
                setSearchedMed(input);
                found = true;
            }
            else if (!found){
                setSearchedMed("");
=======
        MedList.forEach(element => {
            if (input === element.Name){
                searchedMed.push(input);
                setInput("");
>>>>>>> Stashed changes
            }
        });
    }

    const addClick=() => {
        if (searchedMed !== ""){
            addedMedList.push(searchedMed);
        }
    }

    const removeClick=(index:number) => {
        addedMedList.splice(index, 1);
    }
    function GetCurrentMedicationList() : void
    {
        setMedlist(JSON.parse(localStorage.getItem('MedicationList')!))
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
                <button onClick={searchClick}>stink knop</button>
            </div>
            <div>
                <h5>Gevonden medicatie:</h5>
                <a>{searchedMed}</a>
                <br />
                <button onClick={addClick}>Voeg toe</button>
            </div>
            <div>
                <h5>Uw toegevoegde medicatie:</h5>
                {returnMedList}
            </div>
        </div>
    );
}

export default MedicationList;