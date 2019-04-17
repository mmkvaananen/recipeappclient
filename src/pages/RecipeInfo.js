import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {getRecipeIngredientsByRecipeId} from '../service/recipeFunctions';
import RecipeIngredientsTable from '../assetComponents/RecipeIngredientsTable';

export default class RecipeInfo extends Component {

    constructor (props) {
        super(props);

        this.state = {
            title: this.props.match.params.recipename,
            ingredients: []

        }
    }

    componentDidMount = () => {
        getRecipeIngredientsByRecipeId(this.props.match.params.recipeid)
        .then(response => {
            console.log("RecipeInfo getRecipeIngredientsByRecipeId response from service: ", response.data);
            this.setState({
                ingredients: response.data
            })
        })
        
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

        return (
            <div>
            recipeinfo page... to be implemented...

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr><th>{this.props.match.params.recipename}</th></tr>
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
