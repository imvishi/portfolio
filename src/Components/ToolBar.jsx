import React, {Component} from "react";
import {
    Navbar,
    Nav
} from "react-bootstrap";
import {SectionType} from "../js/SectionType";

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
        this.onSectionClick = this.onSectionClick.bind(this)
    }

    onSectionClick(section) {
        this.props.onSectionChanged(section)
    }

    render() {
        return (
            <div style={divStyle}>
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <ul style={ulStyle} onClick={() => this.onSectionClick(SectionType.HOME)}> Home</ul>
                            <ul style={ulStyle} onClick={() => this.onSectionClick(SectionType.ABOUT)}> About</ul>
                            <ul style={ulStyle} onClick={() => this.onSectionClick(SectionType.PORTFOLIO)}>Portfolio
                            </ul>
                            <ul style={ulStyle} onClick={() => this.onSectionClick(SectionType.CONTACT)}>Contact</ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}