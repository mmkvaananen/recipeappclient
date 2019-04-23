import React, { Component } from 'react';
import {Button, Col, Form} from 'react-bootstrap';

export default class AddIngredientForm extends Component {

    constructor (props) {

        super(props);

        this.state = {
            id: '',
            name: '',
            unit: '',
            amount: '' 
        }
    }

    updateId = (e) =>  {
        this.setState({
            id : e.target.value
        })

    }

    updateName = (e) =>  {
        this.setState({
            name : e.target.value
        })

    }

    updateUnit = (e) => {
        this.setState({
            unit : e.target.value
        })
    }

    updateAmount = (e) => {
        this.setState({
            amount : e.target.value
        })
    }

    addIngredient = (e) => {
        e.preventDefault();
        this.props.addIngredient(this.state.id, this.state.name, this.state.unit, this.state.amount);
    }

    render() {
        return (
            <div>


            <Form>
            <Form.Row>
            <Form.Group as={Col} controlId="id">
            <Form.Label>Ingredient ID</Form.Label>
            <Form.Control type="number" placeholder="Enter ingredient ID" value={this.state.id} onChange={this.updateId}/>
            </Form.Group>

            <Form.Group as={Col} controlId="name">
            <Form.Label>Ingredient name</Form.Label>
            <Form.Control type="text" placeholder="Enter ingredient name" value={this.state.name} onChange={this.updateName}/>
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Enter amount" value={this.state.amount} onChange={this.updateAmount} />
            </Form.Group>            

            <Form.Group as={Col} controlId="unit">
                <Form.Label>Unit</Form.Label>
                <Form.Control as="select" value={this.state.unit} onChange={this.updateUnit}>
                <option>Choose...</option>
                <option>g</option>
                </Form.Control>
            </Form.Group>
            </Form.Row>    

            <Button variant="secondary" type="submit" onClick={this.addIngredient} >Add ingredient</Button>
            <Button variant="secondary" type="submit" onClick={this.props.cancel} >Cancel</Button>
            </Form>
            

                

            </div>
        )
    }
}
