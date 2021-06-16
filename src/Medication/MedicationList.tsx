import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";
import axios from 'axios';

export interface Medication {
    id: number;
    name: string;
    hasRule: boolean;
    ruleID: number;
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

    const [adviceResult, setAdviceResult] = useState<Boolean>();
    const [finalAdvice, setFinalAdvice] = useState<String>("");
    
    //test
    function GenerateAdvice(): void {
        let data = addedMedList;
        let json = JSON.stringify(data);
        console.log(data);
        axios.post(`http://localhost:8080/algorithm/getAdvice`, addedMedList)
    
        .then((response) => {
            console.log(response.data);
            setAdviceResult(response.data);
    
            addedMedList.splice(0, addedMedList.length);

            if (adviceResult) setFinalAdvice("U hoeft geen contact op te nemen met een dokter.");
            else setFinalAdvice("Het is verstandig om contact op te nemen met een dokter.");
        })
        .catch((error) => {
            console.log(error);
            setFinalAdvice("Er lijkt is iets mis gegaan. We konden op dit moment geen advies genereren, onze excuses.");
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
            <div>
                <button onClick={GenerateAdvice}>Genereer advies</button>
                <div>
                    {finalAdvice}
                </div>
            </div>
        </div>
    );
}

export default MedicationList;