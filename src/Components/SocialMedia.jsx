import React  from "react";
import {
    faLinkedin,
    faFacebookSquare,
    faGithubSquare,
    faTwitterSquare,
    faInstagram,
    faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import {SocialMediaUrl} from "../js/Constant"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Style/SocialMediaStyle.css"

/**
 * Social Media Component. This component shows social media icons and handle Social media Icons clicks.
 */
export default function SocialMedia() {
    return (
        <div className="Div">
            <FontAwesomeIcon
                icon={faGithubSquare}
                className="GitHubIcon"
                onClick={() => window.location.href = SocialMediaUrl.GITHUB}/>
            <FontAwesomeIcon
                icon={faLinkedin}
                className="LinkedInIcon"
                onClick={() => window.location.href = SocialMediaUrl.LINKEDIN}/>
             <FontAwesomeIcon
                icon={faStackOverflow}
                className="StackOverFlowIcon"
                onClick={() => window.location.href = SocialMediaUrl.STACK_OVERFLOW}/>
            <FontAwesomeIcon
                icon={faTwitterSquare}
                className="TwitterIcon"
                onClick={() => window.location.href = SocialMediaUrl.TWITTER}/>
            <FontAwesomeIcon
                icon={faFacebookSquare}
                className="FaceBookIcon"
                onClick={() => window.location.href = SocialMediaUrl.FACEBOOK}/>
            <FontAwesomeIcon
                icon={faInstagram}
                className="InstagramIcon"
                onClick={() => window.location.href = SocialMediaUrl.INSTAGRAM}/>
        </div>
    )
}