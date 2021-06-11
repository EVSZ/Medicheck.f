import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import './UserPForm.css'
import axios from 'axios';
import { Medication } from '../Medication/MedicationList';

export interface IPatient {
    name: string;
    height: number;
    weight: number;
    age?: string;
    gender: String;
    preg: boolean;
    MedList: Medication[] | null;
}

function UserPForm({ properties }: { properties: IPatient }) {
    const [name, setName] = useState<string>(properties.name);
    const [height, setHeight] = useState<number>(properties.height);
    const [weight, setWeight] = useState<number>(properties.weight);
    const [age, setAge] = useState<string | undefined>();
    const [gender, setGender] = useState<String>(properties.gender);
    const [pregnant, setPreg] = useState<boolean>(false);

    const [patient] = useState<IPatient>();

    function showPregnant(): JSX.Element {
        let checkbox: JSX.Element;
        if (gender === "Male") {
            checkbox = <div> </div>;
        } else if (gender === "Female") {
            checkbox = (<div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGrouplabel">
                        <Form.Label> Zwanger? </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <input onSelect={() => {
                            setPreg(true);
                        }} type="checkbox" />
                    </div>
                </Form.Group>
            </ div>);
        } else {
            checkbox = <div> </div>
        }
        return checkbox;
    }

    return (
        <Form className="main" onSubmit={(e) => {
            e.preventDefault();
            axios.post(`http://localhost:8080/api/patienten/post`, { name, height, weight, gender, pregnant, age })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }}>
            <h3>Persoonlijke Informatie</h3>
            <div className="UserPFormGroup">
                <div className="element">
                    <label className="formLabel">Naam
                    <input type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            required />
                    </label>
                </div>
            </div>
            <div className="UserPFormGroup">
                <div className="element">
                    <label className="formLabel">Lengte
                    <input type="number"
                            min="1"
                            step="1"
                            value={height}
                            onChange={(e) => {
                                setHeight(parseInt(e.target.value))
                            }}
                            required />
                    </label>
                </div>
            </div>
            <div className="UserPFormGroup">
                <div className="element">
                    <label className="formLabel">Gewicht
                    <input type="number"
                            min="1"
                            step="1"
                            value={weight}
                            onChange={(e) => {
                                setWeight(parseInt(e.target.value))
                            }}
                            required />
                    </label>
                </div>
            </div>
            <div className="UserPFormGroup">
                <div className="element">
                    <label className="radioButton">Man
                <input type="radio"
                            onChange={() => {
                                setGender("Male");
                                setPreg(false);
                            }
                            } />
                        <span className="customRadio"></span>
                    </label>
                </div>
                <div>
                    <label className="radioButton">Vrouw
                <input type="radio"
                            name="formHorizontalRadios"
                            onChange={() => {
                                setGender("Female");
                                setPreg(false);
                            }
                            } checked={true} />
                        <span className="customRadio"></span>
                    </label>
                </div>
            </div>
            {showPregnant()}
            < div className="UserPFormGroup" >
                <div className="element">
                    <label className="formLabel">Leeftijd
                    <input type="date"
                            onChange={(e) => {
                                setAge(e.target.value)
                            }}
                            required />
                    </label>
                </div>
            </div>
        </Form >
    );
}

export default UserPForm;