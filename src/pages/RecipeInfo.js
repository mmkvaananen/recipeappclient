import React, { Component } from 'react';
import {getRecipeIngredientsByRecipeId} from '../service/recipeFunctions';

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
        return (
            <div>
            recipeinfo page... to be implemented...
            </div>
        )
    }
}
