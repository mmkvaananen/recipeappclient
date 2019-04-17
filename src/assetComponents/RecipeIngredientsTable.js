import React, { Component } from 'react'

export default class RecipeIngredientsTable extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.number}</td>
            <td>{this.props.name}</td>
            <td>{this.props.amount}</td>
            <td>{this.props.unit}</td>
            </tr>
        )
    }
}
