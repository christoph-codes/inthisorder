import React from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

// Pages in App to Route to
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import UserLogin from '../../user/views/UserLogin'
import AdminLogin from '../../admin/views/AdminLogin'

export default function Main() {
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
                <Route path="/admin/login">
                    <AdminLogin />
                </Route>
                <Route path="/child/login">
                    <UserLogin />
                </Route>
            </Switch>
        </div>
    )
}