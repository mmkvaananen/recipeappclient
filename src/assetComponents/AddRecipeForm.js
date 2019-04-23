import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';

export default class AddRecipeForm extends Component {

    constructor (props) {

        super(props);

        this.state = {
            name: '',
            servings: '' 
        }
    }

    addRecipe = (e) => {
        e.preventDefault();
        this.props.addRecipe(this.state.name, this.state.servings);
    }

    updateName = (e) =>  {
        this.setState({
            name : e.target.value
        })

    }

    updateServings = (e) => {
        this.setState({
            servings : e.target.value
        })
    }

    render() {
        return (
            <Form>
            <Form.Row>
            <Form.Group as={Col} controlId="recipeName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter recipe name" value={this.state.name} onChange={this.updateName}/>
            </Form.Group>

            <Form.Group as={Col} controlId="recipePortions">
            <Form.Label>Servings</Form.Label>
            <Form.Control type="number" placeholder="Enter number of servings" value={this.state.servings} onChange={this.updateServings} />
            </Form.Group>
            </Form.Row>

            <Button variant="secondary" type="submit" onClick={this.addRecipe} >Add recipe</Button>
            <Button variant="secondary" type="submit" onClick={this.props.cancel} >Cancel</Button>
            </Form>
        )
    }
}
