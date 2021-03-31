import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";

function Temp() {
    const [tempMedList] = useState<string[]>(["med1", "med2", "med3"]);

    const [input, setInput] = useState<string>();

    const [searchedMed, setSearchedMed] = useState<string[]>([]);
    const [addedMedList] = useState<string[]>([]);
    
    const searchClick=() => {
        tempMedList.forEach(element => {
            if (input === element){
                searchedMed.push(input);
                setInput("");
            }
        });
    }

    const addClick=(index:number) => {
        addedMedList.push(searchedMed[index]);
        setSearchedMed([]);
    }

    const removeClick=(index:number) => {
        addedMedList.splice(index, 1);
        setSearchedMed(["EchtGai"]);
        setSearchedMed([]);
    }

    function returnMedList(addedMedList: string[]) {
        return addedMedList.map((string, index) => 
            <div key={index}>
                <li>{string}</li>
                <button onClick={() => removeClick(index)}>Verwijder</button>
            </div>
        );
    }

    function returnSearchedMeds(searchedMedList: string[]) {
        return searchedMedList.map((string, index) =>
            <div key={index}>
                <li>{string}</li>
                <button onClick={() => addClick(index)}>Voeg toe</button>
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
                {returnSearchedMeds(searchedMed)}
            </div>
            <div>
                <h5>Uw toegevoegde medicatie:</h5>
                {returnMedList(addedMedList)}
            </div>
        </div>
    );
}

export default Temp;