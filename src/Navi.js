import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default class Navi extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/"><img src="/img/cake.png" style={{width:"50px"}} alt="logo_cake" /></Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link nav-link-other" to="/home">Home</Link>
                    <Link className="nav-link nav-link-other" to="/recipe">Recipe</Link>
                </Nav>
            </Navbar>
        )
    }
}
