import react from 'react';
import { Form, InputGroup } from 'react-bootstrap';
export default function RegistrationForm() {

    return (
        <div>
            <Form.Group>
                <div>
                    <Form.Label>
                        Naam:
                    </Form.Label>
                </div>
                <div>
                    <InputGroup>
                        <Form.Control
                            type="text"
                        />
                    </InputGroup>
                </div>
                <div>
                    <Form.Label>
                        Email:
                    </Form.Label>
                </div>
                <div>
                    <InputGroup>
                        <Form.Control
                            type="text"
                        />
                    </InputGroup>
                </div>
                <div>
                    <Form.Label>
                        Wachtwoord:
                    </Form.Label>
                </div>
                <div>
                    <InputGroup>
                        <Form.Control
                            type="text"
                        />
                    </InputGroup>
                </div>
                <div>
                    <Form.Label>
                        Wachtwoord Bevestigen:
                    </Form.Label>
                </div>
                <div>
                    <InputGroup>
                        <Form.Control
                            type="text"
                        />
                    </InputGroup>
                </div>
            </Form.Group>
        </div>
    );
}