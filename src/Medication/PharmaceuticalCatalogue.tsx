import { useState } from "react";
import './PharmaceuticalCatalogue.css';

interface PharmaceuticalCatalogueProps {

}

export default function PC({ properties }: { properties: PharmaceuticalCatalogueProps }) {

    const medication = ["med1", "med2", "med3", "med4"];
    const medList = medication.map((string, index) =>
        <div key={index}>
            <li>{string}</li>
            <button>voeg toe</button>
        </div>
    );

    const addedMedication = [""];
    const addedMedList = addedMedication.map((string) =>
    <div>
        <li>{string}</li>
    </div>
    
);
    return (
        <div className="list">
            <h3>Medicatie lijst</h3>
            <input type="text" value="Zoek medicatie"></input>
            <h3>Toegevoegde medicatie:</h3>
            <ul>{medList}</ul>
        </div>
    );
}
