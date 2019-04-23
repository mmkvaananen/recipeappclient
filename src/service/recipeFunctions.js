const axios = require('axios');

export function getRecipes() {
    
    let url = "/api/recipe/recipes";
    console.log("getRecipe function url: ", url);
    var options = {
        url: url,
        method: 'GET',
    }

    return axios(options)
    .then(response => {
        console.log("getRecipes response from server: ", response);
        return response;
    })
    .catch(e => {
        console.log("getTravels catch virheilmoitus: ", e);
        return e;
    })

    // let promise = apiCall(options)
    // return Promise.all(promise).then(res => {return res})
   
}

export function getRecipeById(id){
    let url = "/api/recipe/recipes"+id;
    console.log("getRecipeById function url: ", url);
    var options = {
        url: url,
        method: 'GET'
    }

    return axios(options)
    .then(response => {
        console.log("GetRecipeById response from server: ", response);
        return response;
    })
}

export function getRecipeIngredientsByRecipeId(id) {
    let url = "/api/recipeingredient/recipeingredients/"+id;
    console.log("getRecipeIngredientsByRecipeId function url: ", url);

    var options = {
        url: url,
        method: 'GET'
    }

    return axios(options)
    .then(response => {
        console.log("GetRecipeIngredientsByRecipeId response from server: ", response);
        return response;
    })
}

export function addNewRecipe(name, servings) {
    let ownerId = 3; //this should be registered users id number

    let url = "/api/recipe/recipes/" + ownerId;

    let postData = {"name" : name, "portions" : servings}

    var options = {
        url: url,
        method: 'POST',
        data: postData
    }

    return axios(options)
    .then(response => {
        console.log("AddNewRecipe response from server: ", response);
        return response;
    })

}

export function addIngredientToRecipe(recipe, ingredient, amount) {
    
    let url = "/api/recipeingredient/recipeingredients";
    console.log("ingredient: ", ingredient);
    console.log("recipe: ", recipe);
    console.log("amount: ", amount);

    let postData = {"ingredient" : ingredient, "recipe" : recipe, "amount": amount}

    var options = {
        url: url,
        method: 'POST',
        data: postData
    }

    return axios(options)
    .then(response => {
        console.log("AddIngredientToRecipe's response from server: ", response.data);
        return response;
    })
}