import { useState } from "react";
import './PharmaceuticalCatalogue.css';

interface PharmaceuticalCatalogueProps {

}

export default function PC({ properties }: { properties: PharmaceuticalCatalogueProps }) {

    const medication = ["med1", "med2", "med3", "med4"];
    const medList = medication.map((string) =>
        <div>
            <li>{string}</li>
            <button>voeg toe</button>
        </div>
    );

    return (
        <div className="list">
            <h3>Medicatie lijst</h3>
            <ul>{medList}</ul>
        </div>
     );
}
