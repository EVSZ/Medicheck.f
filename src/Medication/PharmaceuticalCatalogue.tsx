import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import './PharmaceuticalCatalogue.css';

interface PharmaceuticalCatalogueProps {

}

export default function PC({ properties }: { properties: PharmaceuticalCatalogueProps }) {

    const medication = ["med1", "med2", "med3", "med4"];

    const [searchedMeds, setSearchedMeds] = useState<string[]>([]);

    function returnMedList(searchedMeds: string[]) {
        let medlist = searchedMeds.map((string, index) => 
        <div key={index}>
        <li>{string}</li>
        <button onClick={addMed}>Voeg toe</button>
        </div>
        );
        return medlist;
    }
    const addedMedication = [""];
    const addedMedList = addedMedication.map((string, index) =>
    <div key={index}>
        <li>{string}</li>
        <button>Verwijder</button>
    </div>
    );

    const [input, setInput] = useState<string>("");

    function checkForMed() {
        let temparray = [];
        for (let i = 0; i < medication.length; i++) {
            if(input === medication[i]) {
                temparray.push(medication[i]);
                setMed(medication[i]);
            }
        }
        setSearchedMeds(temparray);
    }

    const [med, setMed] = useState(searchedMeds[0]);

    function addMed() {
        if (med !== null){
            addedMedication.push(med);
        }
    }

    return (
        <div className="list">
            <h3>Medicatie lijst</h3>
            <input type="text" value={input} placeholder="Zoek medicatie" onChange={(e) => {setInput(e.target.value)}}></input>
            <button onClick={checkForMed}>Zoek</button>
            <ul>{returnMedList(searchedMeds)}</ul>
            <h3>Toegevoegde medicatie:</h3>
            {addedMedList}
        </div>
    );
}
