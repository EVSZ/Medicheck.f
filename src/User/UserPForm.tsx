import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import './UserPForm.css'
import axios from 'axios';
import { Medication } from '../Medication/MedicationList';

interface iName {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
}

interface iHeight {
    height: number
    setHeight: React.Dispatch<React.SetStateAction<number>>
}

interface iWeight {
    weight: number
    setWeight: React.Dispatch<React.SetStateAction<number>>
}

interface iAge {
    age: string
    setAge: React.Dispatch<React.SetStateAction<string>>
}

interface iGender {
    gender: number
    setGender: React.Dispatch<React.SetStateAction<number>>
}

interface iPrego {
    prego: boolean
    setPrego: React.Dispatch<React.SetStateAction<boolean>>
}

function UserPForm({name, height, weight, age, gender, prego}:{name:iName, height:iHeight, weight:iWeight, age:iAge, gender:iGender, prego: iPrego}) {

    // const [patient] = useState<IPatient>();

    function showPregnant(): JSX.Element {
        let checkbox: JSX.Element;
        if (gender.gender === 0) {
            checkbox = <div> </div>;
        } else if (gender.gender === 1) {
            checkbox = (<div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGrouplabel">
                        <Form.Label> Zwanger? </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <input onSelect={() => {
                            prego.setPrego(true)
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
            axios.post(`http://localhost:8080/api/patienten/post`, { name, height, weight, gender, prego, age })
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
                            value={name.name}
                            onChange={(e) => {
                                name.setName(e.target.value)
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
                            value={height.height}
                            onChange={(e) => {
                                height.setHeight(parseInt(e.target.value))
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
                            value={weight.weight}
                            onChange={(e) => {
                                weight.setWeight(parseInt(e.target.value))
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
                                gender.setGender(0)
                                prego.setPrego(false)
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
                                gender.setGender(1)
                                prego.setPrego(false)
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
                                age.setAge(e.target.value)
                            }}
                            required />
                    </label>
                </div>
            </div>
        </Form >
    );
}

export default UserPForm;