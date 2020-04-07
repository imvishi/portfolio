import React, {Component} from "react";
import {
    Navbar,
    Nav
} from "react-bootstrap";
import {Link} from "react-router-dom";

const divStyle = {
    paddingTop: 10,
    color: 'white',
    fontFamily: "Rubik",
    fontSize: 18,
};
const ulStyle = {
    cursor: "pointer"
}

export default class ToolBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={divStyle}>
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <ul style={ulStyle}><Link to="/home"> Home</Link></ul>
                            <ul style={ulStyle}><Link to="/about">About</Link></ul>
                            <ul style={ulStyle}><Link to="/portfolio">Portfolio</Link></ul>
                            <ul style={ulStyle}><Link to="/contact">Contact</Link></ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}