import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, InputGroup, Col, Button } from 'react-bootstrap';

import axios from 'axios';
import { Medication } from './Medication/MedicationList';

export interface Patient 
{
    name: string;
    height: number;
    weight: number;
    age?: string;
<<<<<<< Updated upstream
    gender: string;
=======
    gender: number;
    MedList: Medication[] | null;
>>>>>>> Stashed changes
}

export default function UserPForm({ properties }: { properties: Patient }) {
    const [MedList, setMedlist] = useState<Medication[] | null>(properties.MedList);
    const [name, setName] = useState<string>(properties.name);
    const [height, setHeight] = useState<number>(properties.height);
    const [weight, setWeight] = useState<number>(properties.weight);
    const [age, setAge] = useState<string | undefined>();
    const [gender, setGender] = useState<string>(properties.gender);
    const [pregnant, setPreg] = useState<boolean>(false);
    
    function showPregnant() : JSX.Element {
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

    function SetMedicationList() : void
    {
        setMedlist(JSON.parse(localStorage.getItem('MedicationList')!));
    }

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
<<<<<<< Updated upstream
            axios.post(`http://localhost:8080/api/patienten/post`, { name, height, weight, gender, pregnant, age })
=======
            SetMedicationList();
            console.log("Naam: " + name + " Height: " + height + " Gender: " + gender + " Preggo: " + preg + " Weight: " + weight + " Age: " + age);
            axios.post(`http://localhost:8080/api/patienten/post`, JSON.stringify(properties))
>>>>>>> Stashed changes
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            console.log("Naam: " + name + " Height: " + height + " Weight: " + weight + " Age: " + age + "Gender " + gender + "PREGGO " + pregnant);
        }}>
            <div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGroupLabel">
                        <Form.Label> Naam: </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <InputGroup>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                </Form.Group>
            </div>
            <div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGroupLabel">
                        <Form.Label> Lengte: </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <InputGroup>
                            <Form.Control
                                type="number"
                                min="1"
                                step="1"
                                value={height}
                                onChange={(e) => {
                                    setHeight(parseInt(e.target.value))
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                </Form.Group>
            </div>
            <div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGroupLabel">
                        <Form.Label> Gewicht: </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <InputGroup>
                            <Form.Control
                                type="number"
                                min="1"
                                step="1"
                                value={weight}
                                onChange={(e) => {
                                    setWeight(parseInt(e.target.value))
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                </Form.Group>
            </div>
            <div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGroupLabel">
                        <Form.Label> Geslacht: </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <Col>
                            <Form.Check
                                type="radio"
                                label="Man"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange={() => {
                                    setGender("Male");
                                    setPreg(false);
                                }
                                } />
                            <Form.Check
                                type="radio"
                                label="Vrouw"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                onChange={() => {
                                    setGender("Female");
                                    setPreg(true);
                                }
                                } />
                        </Col>
                    </div>
                </Form.Group>
            </div>
            {showPregnant()}
            <div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGroupLabel">
                        <Form.Label> Leeftijd: </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <InputGroup>
                            <Form.Control
                                type="date"
                                onChange={(e) => {
                                    setAge(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                </Form.Group>
            </div>
            <div className="UserPFormGroup">
                <Form.Group>
                    <Button type="submit">Send</Button>
                </Form.Group>
            </div>
        </Form>
    );
}