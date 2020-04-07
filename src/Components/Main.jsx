import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ToolBar from "./ToolBar";
import {Home} from "./Home";
import Error404 from "./Error404";
import {SectionType} from "../js/SectionType";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from "react-transition-group";
import '../Style/transitionStyle.css'
import SocialMedia from "./SocialMedia";

/**
 * Main component that handle all the sections of the app.
 */
const mainClass = class Main extends Component {
    constructor(props) {
        super(props);
        this.handleSectionChange = this.handleSectionChange.bind(this)
    }

    /**
     * method used to push the active section into the history Only active section will render.
     *
     * @param sectionType the type of active section
     */
    handleSectionChange(sectionType) {
        switch (sectionType) {
            case SectionType.HOME: {
                this.props.history.push("/home")
                break;
            }
            case SectionType.ABOUT: {
                console.log("about")
                this.props.history.push("/about")
                break;
            }
            case SectionType.CONTACT: {
                this.props.history.push("/contact")
                break;
            }
            case SectionType.PORTFOLIO: {
                this.props.history.push("/portfolio")
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.location.pathname !== this.props.location.pathname
    }

    render() {
        const canShowNavBar = this.props.location.pathname !== "/home"
        const {location} = this.props;
        return (
            <div>
                {canShowNavBar ? <ToolBar onSectionChanged={this.handleSectionChange}/> : null}
                <SocialMedia/>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={{
                            enter: 1000,
                            exit: 1000,
                        }}
                        classNames="page-slide">
                        <Switch location={location}>
                            <Route exact path="/"><Redirect to="/home"/></Route>
                            <Route path="/home" component={() => <Home onSectionChanged={this.handleSectionChange}/>}/>
                            <Route path="/about" component={Error404}/>
                            <Route path="/portfolio" component={Error404}/>
                            <Route path="/contact" component={Error404}/>
                            <Route component={Error404}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}
export default withRouter(mainClass)