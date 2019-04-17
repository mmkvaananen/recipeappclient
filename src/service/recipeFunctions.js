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