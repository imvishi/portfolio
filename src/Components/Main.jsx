import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ToolBar from "./ToolBar";
import {Home} from "./Home";
import Error404 from "./Error404";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from "react-transition-group";
import '../Style/transitionStyle.css'
import SocialMedia from "./SocialMedia";
import About from "./About";
import Resume from "../Resources/Resume.pdf"
import Contact from "./Contact";

/**
 * Main component that handle all the sections of the app.
 */
const mainClass = class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const canShowNavBar = this.props.location.pathname !== "/home"
        const {location} = this.props;
        const public_url = process.env.PUBLIC_URL
        console.log(public_url +"    "+ this.props.location.pathname)
        return (
            <div>
                {canShowNavBar ? <ToolBar/> : null}
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
                            <Route path="/home" component={() => <Home/>}/>
                            <Route path="/about" component={() => <About/>}/>
                            <Route path="/portfolio" component={()=> window.open(Resume)}/>
                            <Route path="/contact" component={() => <Contact/>}/>
                            <Route component={Error404}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}
export default withRouter(mainClass)