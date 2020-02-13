import React from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

// Pages in App to Route to
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
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