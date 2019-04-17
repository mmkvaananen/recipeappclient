import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Recipeinfo from './pages/RecipeInfo';
import PageNotfound from './pages/PageNotFound';
import Navi from './Navi';


export default class Routes extends Component {

    render() {
        return (
            <Router>
                <Navi />
                <div className = "App" >
                    <Switch>
                        <Route exact path="/" render={(props) => (<Home {...props} />)} />
                        <Route exact path="/home" render={(props) => (<Home {...props} />)} />
                        <Route exact path="/recipe" render={(props) => (<Recipe {...props} />)} />
                        <Route path="/recipe/:recipeid/:recipename" render={(props) => (<Recipeinfo {...props} />)} />
                        <Route component={PageNotfound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
