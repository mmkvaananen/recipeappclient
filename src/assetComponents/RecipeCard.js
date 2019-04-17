import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

export default class RecipeCard extends Component {
   

    render() {
        var link = "/recipe/" + this.props.recipeId + "/" + this.props.title;
        console.log("Link: ", link);
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.portions} servings</Card.Subtitle>
                    <Card.Text>
                        Not yet implemented
                        (This will contain some information about nutrients and calories...)
                    </Card.Text>
                    <Link className = "nav-link nav-link-other" to={link} >View recipe</Link>
                </Card.Body>
            </Card>
        )
    }
}
