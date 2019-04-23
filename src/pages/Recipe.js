import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {getRecipes, addNewRecipe} from '../service/recipeFunctions';
import RecipeCard from '../assetComponents/RecipeCard';
import AddRecipeForm from '../assetComponents/AddRecipeForm';
import ContainerModal from '../assetComponents/ContainerModal';
import '../styles/recipe.css';


export default class Recipe extends Component {

    constructor() {
        super();
        this.state = {
            recipes :[],
            showModal : false,
            redirect: false,
            target: ''
        }
    }

    addRecipeButtonClick = (e) => {
        e.preventDefault();
        console.log("Add new recipe button was clicked in the recipe page");
        this.setState({
            showModal : true
        })
    }

    addNewRecipe = (name, servings) => {
        console.log("Add recipe button was clicked");
        addNewRecipe(name, servings)
        .then(response => {
            console.log("addNewRecipe response from service: ", response.data);
            this.setState({
                showModal : false,
                redirect : true,
                target: {id : response.data.id, name : response.data.name, portions: response.data.portions}
            })
        })
    }

    handleModalClose = () => {
        this.setState({
            showModal : false
        })
    }

    listRecipes = () => {
        getRecipes()
        .then(res => {
            console.log("getrecipees response is: ", res.data);

            this.setState({recipes: res.data});
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            let target = "/recipe/" + this.state.target.id + "/" + this.state.target.name + "/" + this.state.target.portions;
            return <Redirect to={target} />
         }
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

        let showModal = this.state.showModal;
        let content = <AddRecipeForm cancel={this.handleModalClose} addRecipe={this.addNewRecipe}/>;

        

        return (
            <div>
                <h2>RECIPES</h2>
                <Button className="add-recipe-button" variant="secondary" onClick={this.addRecipeButtonClick}>Add new recipe</Button>
                {this.renderRedirect()}
               
                {
                    recipes? 
                    recipeList :
                    null
                }

                {showModal ? <ContainerModal title="Add New Recipe" showModal={this.state.showModal} handleModalClose={this.handleModalClose} content= {content}/> : null }
                
                
           {/* {recipeList} */}
            </div>
        )
    }
}
