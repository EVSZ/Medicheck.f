import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Form, InputGroup, Col, Button } from 'react-bootstrap';

export interface UserPFormProps {
}
 
export interface UserPFormState {
    length: number;
    weight: number;
    age: string;
    gender: string;
    pregnant: boolean;
}
 
class UserPForm extends React.Component<UserPFormProps, UserPFormState> {
    constructor(props: UserPFormProps) {
        super(props);
        this.state = {
            length: 100,
            weight: 50,
            age: '10/09/1998',
            gender: '',
            pregnant: false
        }
    }
    render() {
        return ( 
            <Form>
                <div className="UserPFormGroup">
                    <Form.Group>
                        <div className="UserPFormGroupLabel">
                            <Form.Label> Lengte: </Form.Label>
                        </div>
                        <div className="UserPFormGroupInput">
                            <InputGroup>
                            <Form.Control type="number" min="1" step="1" value={this.state.length}/>
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
                            <Form.Control type="number" min="1" step="1" value={this.state.weight}/>
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
                            <Form.Control type="date" min="1" step="1" value={this.state.age}/>
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
}
 
export default UserPForm;