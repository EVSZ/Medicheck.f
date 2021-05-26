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
    gender: String;
    preg: boolean;
    MedList: Medication[] | null;
}

export default function UserPForm({ properties }: { properties: Patient }) {
    const [name, setName] = useState<string>(properties.name);
    const [height, setHeight] = useState<number>(properties.height);
    const [weight, setWeight] = useState<number>(properties.weight);
    const [age, setAge] = useState<string | undefined>();
    const [gender, setGender] = useState<String>(properties.gender);
    const [pregnant, setPreg] = useState<boolean>(false);

    const [patient] = useState<Patient>();
    
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

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            axios.post(`http://localhost:8080/api/patienten/post`, { name, height, weight, gender, pregnant, age })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
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
                        <Form.Label> Geboortedatum: </Form.Label>
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
                    <Button type="submit">Sla gegevens op</Button>
                </Form.Group>
            </div>
        </Form>
    );
}