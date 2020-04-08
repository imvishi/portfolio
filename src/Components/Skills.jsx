import React, {Component} from "react";
import "../Style/SkillStyle.sass"
import {Col, Row, Container} from "react-bootstrap";
import RatingInStar from "./RatingInStar";
export default class Skills extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="skillOuterDiv">
                <Container>
                    <div className="skillInnerDiv">
                        <p className="CrossButton" onClick={() => this.props.onSkillClose()}>X</p>
                        <span style={{display: "flex", flexDirection: "row"}}>
                            <h1 className="subHeaderTextDark" style={{maPoergin: "2%"}}>Django</h1>
                            <RatingInStar rating={3}/>
                        </span><hr/>
                        <span style={{display: "flex", flexDirection: "row"}}>
                            <h1 className="subHeaderTextDark" style={{margin: "2%"}}>Django</h1>
                            <RatingInStar rating={3}/>
                        </span><hr/>
                        <span style={{display: "flex", flexDirection: "row"}}>
                            <h1 className="subHeaderTextDark" style={{margin: "2%"}}>Django</h1>
                            <RatingInStar rating={3}/>
                        </span><hr style={{color:"green",width:"19%"}}/>
                    </div>
                </Container>
            </div>
        )
    }
}