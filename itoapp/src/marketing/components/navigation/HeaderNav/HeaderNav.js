import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNavContent from "./HeaderNavContent";
import "./HeaderNav.css";

import { Grid, Container, Section } from "uikit-react";

class HeaderNav extends React.Component {
  render() {
    return (
      <div className="HeaderNav">
        <Container>
          <Grid>
            <Section width="1-3">
              <HeaderLogo />
            </Section>
            <Section width="2-3" className="uk-text-right">
              <HeaderNavContent />
            </Section>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default HeaderNav;
