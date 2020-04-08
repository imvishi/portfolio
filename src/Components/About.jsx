import React, {Component} from "react";
import {faAndroid, faCss3Alt, faJava, faJs, faPython, faReact, faSass} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Style/Portfolio.sass"
import "../Style/FontStyle.sass"
import android from "../Resources/android.jpg"
import other from "../Resources/Other.png"
import website from "../Resources/Website.jpg"
import {Col, Container, Row} from "react-bootstrap";
import {
    experienceCogniBody,
    experienceCogniHeader,
    experienceCogniRole,
    experienceRajaBody,
    experienceRajaHeader,
    experienceRajaRole
} from '../Resources/Strings'
import TimeLineComponent from "./TimeLineComponent";
import Skills from "./Skills";

/**
 * Component to show the Portfolio Screen of the site.
 */
export default class About extends Component {
    constructor(props) {
        super(props)
        this.onSkillSelect = this.onSkillSelect.bind(this)
        this.onSkillClose = this.onSkillClose.bind(this)
        this.state = {
            showSkillBar: false
        }
    }

    onSkillSelect() {
        this.setState({showSkillBar: true})
    }

    onSkillClose() {
        this.setState({showSkillBar: false})
    }

    render() {
        return (
            <div>
                {this.state.showSkillBar ? <Skills onSkillClose = {this.onSkillClose}/>: null}
                <div className="divStyleEven">
                    <Container>
                        <h1 className="headerTextDark">About me</h1>
                        <p className="subHeaderTextDark" style={{margin: "3% 10% 10% 10%"}}>
                            Hi, I'm Vishal Verma, a Software Developer from Pune, India. I am a passionate programmer
                            and problem solver who is always ready to take challenges.
                        </p>
                    </Container>
                    <Container>
                        <TimeLineComponent title = {experienceCogniHeader} description = {experienceCogniBody}/>
                        <TimeLineComponent
                            title = {experienceRajaHeader}
                            description = {experienceRajaBody}/>
                    </Container>
                </div>
                <div className="divStyleOdd">
                    <svg height="80" width = "100%" preserveAspectRatio="none" viewBox="0,0,500,80">
                        <polygon points="0,0 500,0 250,80" className="triangleEven"/>
                    </svg>
                    <h1 className="headerTextDark">Skills</h1><br/>
                    <Container>
                        <Row>
                            <Col className="Col" sm={12} md={6} lg={4}>
                                <div className="outerDiv" onClick={this.onSkillSelect}>
                                    <img src={website} alt="Avatar" style={{width: "100%", height: "100%"}}/>
                                    <div className="overlay">
                                        <div className="text">Web Design</div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="Col" sm={12} md={6} lg={4}>
                                <div className="outerDiv" onClick={this.onSkillSelect}>
                                    <img src={android} alt="Avatar" style={{width: "100%", height: "100%"}}/>
                                    <div className="overlay">
                                        <div className="text">Mobile Development</div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="Col" sm={12} md={6} lg={4}>
                                <div className="outerDiv" onClick={this.onSkillSelect}>
                                    <img src={other} alt="Avatar" style={{width: "100%", height: "100%"}}/>
                                    <div className="overlay">
                                        <div className="text">Other</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}