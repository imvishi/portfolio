import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import '../Style/HomeStyle.css'
import '../Style/FontStyle.sass'
import {SectionType} from "../js/SectionType";

/**
 * Component to show the Home Screen of the site.
 */
export class Home extends Component {
    constructor(props) {
        super(props)
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick() {
        this.props.onSectionChanged(SectionType.ABOUT)
    }

    render() {
        return (
            <div className="ContainerStyle">
                <div className="WelcomeDiv">
                    <p className="headerTextLite">Hey, I'm Vishal Verma</p>
                    <span>
                        <p className="subHeaderTextLite">Let's take a tour</p>
                        <FontAwesomeIcon
                            className="WelcomeIcon"
                            icon={faHandPointRight}
                            onClick={this.onButtonClick}/>
                    </span>
                </div>
            </div>
        );
    }
}