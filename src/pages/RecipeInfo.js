import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap';
import ContainerModal from '../assetComponents/ContainerModal';
import AddIngredientForm from '../assetComponents/AddIngredientForm';
import {getRecipeIngredientsByRecipeId, addIngredientToRecipe} from '../service/recipeFunctions';
import RecipeIngredientsTable from '../assetComponents/RecipeIngredientsTable';

export default class RecipeInfo extends Component {

    constructor (props) {
        super(props);

        this.state = {
            title: this.props.match.params.recipename,
            ingredients: [],
            showAddIngredientModal: false

        }
    }

    addIngredient = () => {
        console.log("Add ingredient button was clicked");
        this.setState({
            showAddIngredientModal: true
        })
    }

    addIngredientSubmit = (id, name, unit, amount) => {
        console.log("Add ingredient submit button was clicked");
        // (recipe, ingredient, amount)

        let recipe = {"id" : this.props.match.params.recipeid, "name" : this.props.match.params.recipename };
        let ingredient = {"id": id, "name": name};
        let ingredientAmount = amount;

        addIngredientToRecipe(recipe, ingredient, ingredientAmount)
        .then(response => {
            this.getRecipeIngredientsFromDb(this.props.match.params.recipeid);
        })

    }

    handleModalClose = () => {
        this.setState({
            showAddIngredientModal : false
        })
    }

    getRecipeIngredientsFromDb(id) {
        getRecipeIngredientsByRecipeId(id)
        .then(response => {
            console.log("RecipeInfo getRecipeIngredientsByRecipeId response from service: ", response.data);
            this.setState({
                ingredients: response.data,
                showAddIngredientModal: false
            })
        })
    }

    componentDidMount = () => {
        this.getRecipeIngredientsFromDb(this.props.match.params.recipeid);        
    } 

    render() {
        console.log("RecipeInfo render, recipe id from url: ", this.props.match.params);
        console.log("this.state.ingredients:", this.state.ingredients);
        let ingredientsList = this.state.ingredients;

        ingredientsList = ingredientsList.map((row, index) => {
            console.log("RecipeInfo mapRow: ", row);
            let ingredientsNumber = index+1;
            return <RecipeIngredientsTable key={index} number={ingredientsNumber} name={row.ingredient.name} amount={row.amount} unit={row.ingredient.servingUnit} />
        })

        let content = <AddIngredientForm recipeId = {this.props.match.params.recipeid} recipeName = {this.props.match.params.recipename} addIngredient={this.addIngredientSubmit}/>;


        return (
            <div>

                {this.state.showAddIngredientModal ? <ContainerModal title="Add New Ingredient" showModal={this.state.showAddIngredientModal} handleModalClose={this.handleModalClose} content= {content}/> : null } 

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th><h2>{this.props.match.params.recipename}</h2></th>
                            <th></th>
                            <th></th>
                            <th><Button variant="secondary" onClick={this.addIngredient}>Add ingredient</Button> </th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Ingredient</th>
                            <th>amount</th>
                            <th>Units</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ingredientsList ? ingredientsList : null}
                    </tbody>
                </Table>
            </div>
        )
    }
}
