import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, InputGroup, Col, Button } from 'react-bootstrap';

import axios from 'axios';

export interface prop {
}

interface State {
    name: string;
    height: number;
    weight: number;
    age?: string;
    gender: string;
}

export default function UserPForm({ properties }: { properties: State }) {
    const [name, setName] = useState<string>(properties.name);
    const [height, setHeight] = useState<number>(properties.height);
    const [weight, setWeight] = useState<number>(properties.weight);
    const [age, setAge] = useState<string | undefined>();
    //const [gender, setGender] = useState<string>(properties.gender);

    return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                axios.post(`http://localhost:8080/api/patienten/post`, {name, height, weight, age})
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                //console.log("Naam: " + name + " Height: " + height + " Weight: " + weight + " Age: " + age);
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
                                />
                                <Form.Check
                                    type="radio"
                                    label="Vrouw"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </div>
                    </Form.Group>
                </div>
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