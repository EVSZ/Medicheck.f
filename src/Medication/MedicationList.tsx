import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";
import { setUncaughtExceptionCaptureCallback } from 'node:process';

function Temp() {
    const [tempMedList] = useState<string[]>(["med1", "med2", "med3"]);

    const [input, setInput] = useState<string>();

    const [searchedMed, setSearchedMed] = useState<string>("");
    const [addedMedList] = useState<string[]>([]);
    
    const searchClick=() => {
        let found: boolean = false;

        tempMedList.forEach(element => {
            if (input === element && !found){
                setSearchedMed(input);
                found = true;
            }
            else if (!found){
                setSearchedMed("");
            }
        });
    }

    const addClick=() => {
        if (searchedMed != ""){
            addedMedList.push(searchedMed);
            console.log({addedMedList});
        }
    }

    const removeClick=(index:number) => {
        addedMedList.splice(index, 1);
    }

    function returnMedList(addedMedList: string[]) {
        return addedMedList.map((string, index) => 
            <div key={index}>
                <li>{string}</li>
                <button onClick={() => removeClick(index)}>Verwijder</button>
            </div>
        );
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
                <a>{searchedMed}</a>
                <br />
                <button onClick={addClick}>Voeg toe</button>
            </div>
            <div>
                <h5>Uw toegevoegde medicatie:</h5>
                {returnMedList(addedMedList)}
            </div>
        </div>
    );
}

export default Temp;