import React from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

// Pages in App to Route to
import Home from '../../components/homePage/HomePage.container';
import About from '../../components/aboutPage/AboutPage.container';
import Contact from '../../components/contactPage/ContactPage.container';
import Login from '../../components/loginPage/LoginPage.container';
import CreateAccount from '../../components/createAccountPage/CreateAccountPage.container';

class MarketingMain extends React.Component {
    render() {
        return (
            <div className="Main">
                {/* Router WIndow */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/create-account">
                        <CreateAccount />
                    </Route>
                </Switch>
            </div>
        )
    }
    
}

export default MarketingMain;