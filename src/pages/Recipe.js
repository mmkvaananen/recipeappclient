import React, { Component } from 'react';
import {getRecipes} from '../service/recipeFunctions';
import RecipeCard from '../assetComponents/RecipeCard';


export default class Recipe extends Component {

    constructor() {
        super();
        this.state = {
            recipes :[]
        }
    }

    listRecipes = () => {
        getRecipes()
        .then(res => {
            console.log("getrecipees response is: ", res.data);

            this.setState({recipes: res.data});
        })
    }


    componentDidMount = () => {
        this.listRecipes();
    }
    render() {

        let recipes = this.state.recipes;

       console.log("recipe render");

        var recipeList = recipes.map((row, index) => {
            console.log("Recipe list row: ", row);
            return <RecipeCard key = {index} recipeId = {row.id} title = {row.name} portions= {row.portions} />
        })

        

        return (
            <div>
                <h2>Recipes</h2>
                <ul>
                {
                    recipes? 
                    recipeList :
                    null
                }
                </ul>
                
           {/* {recipeList} */}
            </div>
        )
    }
}
