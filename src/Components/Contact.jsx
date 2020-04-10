import React from "react";
import {
    faLinkedin,
    faFacebook,
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Container, Row} from "react-bootstrap";
import {SocialMediaUrl} from "../js/Constant";

const styleDiv = {
    paddingTop: "10%",
    minHeight: "100vh",
    background: "#ffffe6",
    textAlign: "center"
}
/**
 * component to show contact me section of the app.
 */
export default function Contact(props) {
    return (
        <div style={styleDiv}>
            <h1 className="headerTextDark" style={{marginBottom: "5%", fontSize: "5em"}}> Contact me</h1>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="LinkedInIcon"
                            style={{fontSize: "10em"}}
                            onClick={() => window.location.href = SocialMediaUrl.LINKEDIN}/>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="FaceBookIcon"
                            style={{fontSize: "10em"}}
                            onClick={() => window.location.href = SocialMediaUrl.FACEBOOK}/>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <FontAwesomeIcon
                            icon={faTwitterSquare}
                            className="TwitterIcon"
                            style={{fontSize: "10em"}}
                            onClick={() => window.location.href = SocialMediaUrl.TWITTER}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
