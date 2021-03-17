import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Form, InputGroup, Col, Button } from 'react-bootstrap';

export interface prop {
}

interface State {
    name: string;
    length: number;
    weight: number;
    age: string;
    gender: string;
}

export default function UserPForm({ properties }: { properties: State }) {
    return (
        <Form>
            <div className="UserPFormGroup">
                <Form.Group>
                    <div className="UserPFormGroupLabel">
                        <Form.Label> Naam: </Form.Label>
                    </div>
                    <div className="UserPFormGroupInput">
                        <InputGroup>
                            <Form.Control
                                type="text"
                                value={properties.name}

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
                                value={properties.length}

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
                                value={properties.weight}

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

                                required
                            />
                        </InputGroup>
                    </div>
                </Form.Group>
            </div>
            <div className="UserPFormGroup">
                <Form.Group>
                    <Button type="submit"               >Send</Button>
                </Form.Group>
            </div>
            <div className="UserPFormGroup">
                <Form.Group>
                    <Button type="submit"               >Get</Button>
                </Form.Group>
            </div>
        </Form>
    );
}