import React from "react";
import HeaderLogo from "./HeaderLogo"
import HeaderNavContent from "./HeaderNavContent";
import "./HeaderNav.css";

import { 
   Grid,
   Container,
   Section
} from "uikit-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from '../../../views/Home';
import About from '../../../views/About';

export default function HeaderNav() {
  return (
    <div className="HeaderNav">
      <Container>
        <Grid>
            <Section width="1-3">
                <HeaderLogo />
            </Section>
            <Section width="2-3">
            <Router>
                <div>
                    <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                    </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
                <HeaderNavContent />
            </Section>
        </Grid>
      </Container>
    </div>
  );
}
