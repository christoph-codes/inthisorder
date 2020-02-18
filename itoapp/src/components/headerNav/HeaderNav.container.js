import React from 'react';
import { Grid, Container, Section } from "uikit-react";
import HeaderNavContent from './HeaderNav.component';
import LogoLight from '../../assets/LogoLight';

export default function HeaderNavContainer() {
    return (
        <div className="HeaderNavContainer">
            <Container>
                <Grid>
                    <Section width="1-3">
                    <div className="HeaderLogo">
                        <div className="logo-wrapper">
                            <LogoLight logoalign="left" />
                        </div>
                    </div>
                    </Section>
                    <Section width="2-3" className="uk-text-right">
                        <HeaderNavContent />
                    </Section>
                </Grid>
            </Container>
        </div>
    )
}