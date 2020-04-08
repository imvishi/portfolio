import React, {Component} from "react";
import "../Style/FontStyle.sass"

const timeLine = {
    position: "relative",
    borderLeft: "4px solid #2e2e1f",
    paddingLeft: "10%",
    overflowWrap: "break-word"
};
const timeLineEvent = {
    position: "absolute",
    left: "-11px",
    top: "-19px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "10px solid #2e2e1f",
};

const divStyle = {
    borderRadius: 10,
    width: "100%",
    background: "white",
    boxShadow: "2px 2px  15px #888888",

}
/**
 *  Component to show timeline.
 * @param props props contains title and description
 * @returns timeline with events
 */
export default function TimeLineComponent(props) {
    return (<div style={timeLine}>
        <div style={timeLineEvent}/>
        <div style={divStyle}>
            <h1 className="headerTextDark">{props.title}</h1>
            <p style={{textAlign: "left", fontFamily: "Roboto", padding: "10px"}}>Nov 2017-Dec 2018</p>
            <hr/>
            <p className="subHeaderTextDark">{props.description}</p>
        </div>
        <br/><br/>
    </div>)
}