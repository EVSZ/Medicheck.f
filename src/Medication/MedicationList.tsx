import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";
import { setUncaughtExceptionCaptureCallback } from 'node:process';

function Temp() {
    const [tempMedList] = useState<string[]>(["med1", "med2", "med3"]);

    const [input, setInput] = useState<string>();

    const [searchedMed, setSearchedMed] = useState<string>("");
    const [addedMedList] = useState<string[]>([]);
    
    const searchClick=() => {
        tempMedList.forEach(element => {
            if (input === element){
                setSearchedMed(input);
            }
        });
    }

    const addClick=() => {
        addedMedList.push(searchedMed);
    }

    return (
        <div className="list">
            <div>
                <input type="text" value={input} placeholder="Zoek medicatie" onChange={(e) => {setInput(e.target.value)}} />
            </div>
            <div>
                <button onClick={searchClick}>stink knop</button>
            </div>
            <div>
                <a>{searchedMed}</a>
            </div>
            <div>
                {addedMedList}
            </div>
        </div>
    );
}

export default Temp;